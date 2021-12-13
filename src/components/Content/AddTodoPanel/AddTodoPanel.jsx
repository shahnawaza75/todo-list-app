import Button from '../../Utils/Button/Button'
import './AddTodoPanell.css'

export default function AddTodoPanel(props) {
  return (
    <div className={`panel ${props.className}`}>
      <h3 className='panel__title'>Add new task</h3>
      <div className='panel__input-container'>
        <input
          className='panel__input'
          type='text'
          placeholder='insert title'
        />
        <textarea
          className='panel__textarea'
          id='subject'
          name='subject'
          placeholder='Write something..'
        ></textarea>
      </div>
      <div className='panel__buton-container'>
        <Button className={'button--red'} content={'Cancel'} />
        <Button className={'button--green'} content={'Done'} />
      </div>
    </div>
  )
}
