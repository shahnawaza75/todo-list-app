import Card from '../Card/Card'

import './CardLayout.css'

export default function CardLayout({ todos }) {
  return (
    <ul className='card-layout'>
      {todos.map((todo) => (
        // <Card />
        <li>tarea</li>
      ))}
    </ul>
  )
}
