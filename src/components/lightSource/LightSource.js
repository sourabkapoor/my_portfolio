import React from 'react'
import "./LightSource.styles.scss"

const LightSource = () => {
  
  return <div className='lightSource'>
    <div id="lampadario">
      <input type="radio" name="switch" value="on" />
      <input type="radio" name="switch" value="off" checked="checked"/>
      <label for="switch"></label>
      <div id="filo"></div>
      <div id="lampadina">             
        {/* <div id="sorpresa">
          <div id="footer">
            You turned me on!
          </div>
          <div id="shadow">
              You turned me on!
          </div>
        </div> */}
      </div>
    </div>
  </div>
}

export default LightSource