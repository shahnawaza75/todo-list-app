import Button from '../../Utils/Button/Button'
import './AddTodoPanell.css'

export default function AddTodoPanel(props) {
  return (
    <div className={`panel ${props.className}`}>
      <h3>Add new task</h3>
      <input type='text' placeholder='insert todo' />
      <Button className={'button--green'} content={'Done'} />
    </div>
  )
}
