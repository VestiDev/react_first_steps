import { useState } from 'react';
import { PeopleList } from './PeopleList';
import { PeopleQuery } from './PeopleQuery';
import { fetchPeople } from './fetchPeople';

function App() {
  const [people, setPeople] = useState([]);

  return (
    <div>
      <header>
        <h1>People</h1>
      </header>
      <main>
        <PeopleQuery getPeople={getPeople}></PeopleQuery>
        <PeopleList people={people} />
      </main>
      <footer>
        copyright &copy; Us.com, {(new Date()).getFullYear()}
      </footer>
    </div>
  );

  function getPeople() {
    fetchPeople()
      .then(people => setPeople(people));
  }
}

export default App;
