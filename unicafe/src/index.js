import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({tag, val}) => (
  <tr>
    <td>{tag}</td>
    <td>{val}</td>
  </tr>
)

const Button = ({tag, handle}) => (
  <button onClick={handle}>
    {tag}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    return (
    <>
      <h1>statistics</h1>
      <table>
      <Statistic tag="good" val={good} />
      <Statistic tag="neutral" val={neutral} />
      <Statistic tag="bad" val={bad} />
      <Statistic tag="average" val={Math.round( ((good - bad)/(good + bad))*100 )/100} />
      <Statistic tag="positive" val={`${Math.round(((good)/(good + neutral + bad)*100)*10)/10}%`}/>
      </table>
    </>
    )
  } else {
    return (
    <>  
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
    )
  }
  
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Rating = ({good, neutral, bad}) => (
    <>
    <Button handle={() => setGood(good + 1)} tag="good"/>
    <Button handle={() => setNeutral(neutral + 1)} tag="neutral"/>
    <Button handle={() => setBad(bad + 1)} tag="bad"/>
    </>
  )

  return (
    <div>
      <h1>give feedback</h1>
      <Rating good={good} neutral={neutral} bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)