const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      {/* <Content  /> */}
      {/* <Total  /> */}
    </div>
  )
}

const Header = (props) =>{
  console.log(props);
  return(
    <div> 
      <h1> {props.course}</h1>
    </div>


  )
}

export default App