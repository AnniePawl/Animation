import React, { Component } from 'react'
import './Base.css'

class Base extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='base_component'>
        <div className='base_rectangle'>

          {/* Circles */}
          <div className='circles'>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div>
          </div>

        </div>



      </div>
    )
  }
}



export default Base