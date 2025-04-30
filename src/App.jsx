import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {


  return (
    <>
     
        <h1>Fitness App </h1> 
        <Counter label="cardio training"></Counter>
        <Counter label="weight training"></Counter>
        <Counter label="water training"></Counter>
    </>
  )
}

export default App
