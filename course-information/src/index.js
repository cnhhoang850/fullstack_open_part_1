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

const Content = ({parts}) => (
  <>
      {parts.map((part) => 
        <Part
          part={part.name} 
          exercise={part.exercises}          
        />
      )}
  </>
)

const Total = ({total}) => (
  <>
  <p>
    Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}
  </p>
  </>
) 
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
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))