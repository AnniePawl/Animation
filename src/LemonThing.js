import React from 'react'
import './LemonThing.css'

function lemon_thingThing() {
  return (

    <div className='lemon_thing_container'>

      <div className='lemon_thing_shading'>
        {/* MOUTH */}
        <div className='mouth'>
          <div className="teeth">
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
            <div className="tooth"></div>
          </div>
        </div>

      </div>

      <div className='lemon_thing'>

        <div className='lemon_thing_leaf'></div>
        <div className='lemon_thing_nobs'>

          <div className='top_nob'>
            <div className='top_nob_shading'></div>
            <div className='top_bud'></div>
          </div>
          <div className='bottom_nob'>
            <div className='bottom_nob_shading'></div>

            <div className='bottom_bud'></div>
          </div>

          {/* EYES */}
          <div className='eyes'>
            <div className='right_eye'>
              <div className='right_pupil'></div>
              <div className='tiny_pupil'></div>

            </div>
            <div className='left_eye'>
              <div className='left_pupil'></div>
              <div className='tiny_pupil'></div>
            </div>
          </div>




        </div>

      </div>
    </div>


  )
}


export default lemon_thingThing