import './Navbar.css'

import AddButton from '../Utils/AddButton/AddButton.jsx'
import AddTodoPanel from './AddTodoPanel/AddTodoPanel'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div onClick={(e) => setOpen(!open)}>
        <AddButton />
      </div>
    </nav>
  )
}
