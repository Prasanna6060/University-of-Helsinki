import { useState } from 'react';
import SearchFilter  from '../components/Search_filter'
import AddPerson from '../components/AddPerson';
import AllPerson from '../components/AllPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [alert, setAlert] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.some(person => person.name === newName)) {
      setAlert(`${newName} already exists! Please choose a different name.`);
      return; // Prevent adding duplicate name
    }

    const newPerson = { name: `${newName} ${number}`, id: persons.length + 1 };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNumber('');
    setAlert('');
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()) ||
    person.number.includes(filter)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {alert && <div style={{ color: 'red' }}>{alert}</div>}
      < SearchFilter />  
      <h2>add a new</h2>
      < AddPerson />
      < AllPerson filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
