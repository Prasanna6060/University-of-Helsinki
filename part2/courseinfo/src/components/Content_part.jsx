import React from 'react'

const Content_part = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      {
      parts.map((part, i) => (
      <p key={i}>
        {part.name} {part.exercises}
      </p>
      ))}
      <p>Total Exercises: {totalExercises}</p>
    </div>
  )
}

export default Content_part
