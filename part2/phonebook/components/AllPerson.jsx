import React from 'react'

const AllPerson = ( { filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filteredPersons.map(person => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  )
}

export default AllPerson
