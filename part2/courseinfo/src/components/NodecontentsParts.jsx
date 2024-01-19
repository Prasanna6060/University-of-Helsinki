import React from 'react'

const NodecontentsParts = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log(parts)
  return (
    <div>
      {
      parts.map((part, i) => (
      <p key={i}>
        {part.name} {part.exercises}
      </p>
      ))}
      <p>Total exercises: {totalExercises}</p>
    </div>
  )
}

export default NodecontentsParts
