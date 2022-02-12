import React from 'react'


import './Button_nav.css'


const Button_nav = (props) => {
  return (
    <div>
        <button className='buttonsetting'>{props.text}</button>
    </div>
  )
}

export default Button_nav