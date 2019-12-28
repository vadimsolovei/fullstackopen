import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const All = (props) => {
  return (
    <>
      <p>All {props.all} </p>
    </>
  )
}

const Average = (props) => {
  return (
    <>
      <p>Average {props.average} </p>
    </>
  )
}

const Positive = (props) => {
  return (
    <>
      <p>Positive {props.positive} %</p>
    </>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)

  const neutralFeedback = () => setNeutral(neutral + 1)

  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <Button onClick={goodFeedback} text='good' />
        <Button onClick={neutralFeedback} text='neutral' />
        <Button onClick={badFeedback} text='bad' />
      </div>
      <div>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <All all={good + neutral + bad} />
        <Average average={((good * 1) + (bad * -1)) / (good + neutral + bad)} />
        <Positive positive={(good / (good + neutral + bad)) * 100} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)