import React from 'react'

function Display(props) {
  return (

    <div className='display'>

      <h1 className='title'>{props.title}</h1>
      <p className='description'>{props.desc}</p>
      {props.comp}

    </div>
  )
}

export default Display 