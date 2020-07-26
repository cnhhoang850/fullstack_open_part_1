import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({tag, handle}) => (
  <button onClick={handle}>{tag}</button>
)

const Heading = ({tag}) => (
  <h1>{tag}</h1>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length + 1)
  .join('0')
  .split('')
  .map(parseFloat))

  
  const genRan = (limit) => {
    const selected = Math.floor(Math.random() * limit)
    setSelected(selected)
  }

  const voteAnec = (selected) => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  } 

  console.log(selected)
  return (
    <div>
      <Heading tag="Anecdote of the day" />
      {props.anecdotes[selected]}
      <br></br>
      <p>has {vote[selected]} votes</p>
      <Button tag="vote" handle={() => voteAnec(selected)} />
      <Button tag="next anedote" handle={() => genRan(anecdotes.length)} />
      <Heading tag="Anecdote with the most votes" />
      {props.anecdotes[vote.indexOf(Math.max(...vote))]}
      <p>has {vote[vote.indexOf(Math.max(...vote))]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)