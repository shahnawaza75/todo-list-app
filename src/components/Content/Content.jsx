import { useState } from 'react'

import CardLayout from './CardLayout/CardLayout'
import AddTodoPanel from './AddTodoPanel/AddTodoPanel'
import AddButton from '../Utils/AddButton/AddButton'

import './Content.css'

export default function Content() {
  const [open, setOpen] = useState(false)
  const [todos, setTodos] = useState([
    { id: 1, task: 'Tarea 1 ', completed: false }
  ])
  return (
    <main className={`content ${open ? 'open' : null}`}>
      <CardLayout todos={todos} />
      <input type='text' placeholder='New task' />
      <div onClick={(e) => setOpen(!open)}>
        <AddButton />
      </div>
      <AddTodoPanel className={` ${open ? 'open' : null}`} />
    </main>
  )
}
