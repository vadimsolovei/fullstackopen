import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ feedback, setFeedback, text }) => (
  <button onClick={() => setFeedback(feedback + 1)}>
    {text}
  </button>
)

const Statistic = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  if (all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <div>
        <Statistic text='Good' value={props.good} />
        <Statistic text='Neutral' value={props.neutral} />
        <Statistic text='Bad' value={props.bad} />
        <Statistic text='All' value={all} />
        <Statistic text='Average' value={(props.good - props.bad) / all} />
        <Statistic text='Positive' value={(props.good / all) * 100} />
      </div>
    )
  }
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <Button feedback={good} setFeedback={setGood} text="good" />
        <Button feedback={neutral} setFeedback={setNeutral} text="neutral" />
        <Button feedback={bad} setFeedback={setBad} text="bad" />
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)