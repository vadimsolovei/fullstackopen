import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all} </p>
      <p>Average {(good - bad) / all}</p>
      <p>Positive {(good / all) * 100} %</p>
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () =>
    setGood(good + 1)

  const neutralFeedback = () =>
    setNeutral(neutral + 1)

  const badFeedback = () =>
    setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <Button onClick={goodFeedback} text='good' />
        <Button onClick={neutralFeedback} text='neutral' />
        <Button onClick={badFeedback} text='bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)