import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>Part: {props.part}, exercise quantity: {props.exercises}</p>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Part part="Fundamentals of React" exercises="10" />
      <Part part="Using props to pass data" exercises="7" />
      <Part part="State of a component" exercises="14" />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
