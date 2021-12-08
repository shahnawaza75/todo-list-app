import { useState } from 'react'

import './Card.css'
import Options from '../Icons/Options'
import OptionsContent from '../OptionsContent/OptionsContent'

export default function Card() {
  const [optionsActive, setOptionsActive] = useState(false)

  return (
    <div className='card'>
      <div className='card__header'>
        <h2 className='card__title black'>Title</h2>
        <button
          className='card__button'
          onClick={() => {
            setOptionsActive(!optionsActive)
          }}
        >
          <Options />
        </button>
      </div>
      <p className='card__content text-regular grayish'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et
        earum quos libero! Neque veritatis commodi molestiae nulla qui
      </p>
      <p className='card__state text-medium black'>State</p>

      {optionsActive && <OptionsContent />}
    </div>
  )
}
