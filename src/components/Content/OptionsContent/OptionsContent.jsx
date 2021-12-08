import Delete from '../Icons/Delete'
import Edit from '../Icons/Edit'
import './OptionsContent.css'

export default function Options() {
  return (
    <div className='options'>
      <div className='options__row'>
        <Edit className={'options__icon options__edit'} />
        <p className='options__text grayish'>Edit</p>
      </div>
      <div className='options__row'>
        <Delete className={'options__icon options__delete'} />
        <p className='options__text grayish'>Delete</p>
      </div>
    </div>
  )
}
