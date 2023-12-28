const App = () => {
  const course =  {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts ={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
    {props.parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises} />
    ))}
  </div>
  );
};

const Total = (props) => {
  const noOfex = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log(noOfex, props);
  return (
    <div>
      <p>No of exercises {noOfex}</p>
    </div>
  );
};

export default App;
