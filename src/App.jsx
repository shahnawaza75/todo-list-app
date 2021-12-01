import './App.css'
import { useState } from 'react'

function App() {

  return (
    <div className='App'>
      <h1>Hello there</h1>
      <button onClick= { ()=> setCount(count += 1 )} > {count} </button>
    </div>
  )
}

export default App
