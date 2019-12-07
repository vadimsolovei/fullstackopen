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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
