import React from 'react'

const AddPerson = ({ handleSubmit, handleNameChange, handleNumberChange, newName, number}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            type='text'
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            type='text'
            value={number}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson
