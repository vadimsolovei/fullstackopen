import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <p>Part: {part.name}, exercise quantity: {part.exercises}</p>)}
    </>
  )
}

const Total = ({parts}) => {
  const sum = parts.reduce((result, current) => result + current.exercises, 0)

  return (
    <>
      <p>Total number of exercises: {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
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
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
