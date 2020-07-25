import React from 'react'
import ReactDOM from 'react-dom'
import { findAllByPlaceholderText } from '@testing-library/react'

const Header = ({course}) => (
  <>
  <h1>{course}</h1>
  </>
)

const Part = ({part, exercise}) => (
  <>
  <p>
    {part} {exercise}
  </p>
  </>
)

const Content = ({parts, exercises}) => (
  <>
      {parts.map((part, i) => 
        <Part
          part={part} 
          exercise={exercises[i]}          
        />
      )}
  </>
)

const Total = ({total}) => (
  <>
  <p>
    Number of exercises {total}
  </p>
  </>
) 
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2,exercises3]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))