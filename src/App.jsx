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
  
  const [alltodos, setalltodos] = useState(initialTodo)

  const [newTask, setNewTask] = useState("")
  
  function submitNewTodo(e){
    e.preventDefault ()
    console.log('pushing')

    let newtodos= alltodos.concat(  { 
      id: 4,
      task:"Go to shop", 
      completed: true
    })
  
    setalltodos(newtodos)
  }
  
  return (
    <>
    <h1>Todo App</h1>
    <ul>
      {alltodos.map(todo => (
        <li>{todo.task}</li>
      ))}
    </ul>

  <form onSubmit={submitNewTodo}>
    <input type= "text" value= {newTask} onChange={e => setNewTask(e.target.value)}></input>
    <button type= "submit">submit</button>
  </form>
    </>
  )
}

export default App