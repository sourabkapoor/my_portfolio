import React from 'react'
import "./MainBody.styles.scss"
import { TechWall } from '../techwall/TechWall'
// import LightSource from '../lightSource/LightSource'

export const MainBody = () => {

  return <div>
    <div class='section'>
      {/* Heading */}
      <div class="heroText">Hi! I am Sourab kapoor</div>
      {/* Changing subhero */}
      <div className='subHero'>- a Full Stack developer</div>
    </div>
    

    {/* Sub Heading or a statement line here with background of all the techs I know. floating icons in this area */}
    <div className='skillsWall'>
      <TechWall />
      <p>With a passion for creating dynamic and user-friendly applications, I specialize in full stack development. I have a knack for solving complex challenges with a variety of tools.
      </p>
    </div>

    {/* Link the about page */}
    <div className='moreAbout'>Get to know more about me....</div>

    {/* Link to projects page */}
    <div className='projects'>Check out my other projects and work</div>


    {/* <div style={{position: "relative"}}>
      <LightSource />
    </div> */}
  </div>
}