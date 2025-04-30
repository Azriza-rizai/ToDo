import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 const initialTodo=[
  { 
    id: 1,
    task:"learn React", 
    completed: true
  },
  { 
    id: 2,
    task:"Go Shopping", 
    completed: false
  },
  { 
    id: 3,
    task:"Go to gym", 
    completed: true
  }
]

function App() {

  


  return (
    <>
    <h1>Todo App</h1>
    <ul>
      {initialTodo.map(todo => (
        <li>{todo.task}</li>
      ))}
    </ul>

  <form>
    <input type= "text"></input>
    <button type= "submit">submit</button>
  </form>
    </>
  )
}

export default App
