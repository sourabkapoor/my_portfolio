import React from 'react'
import "./MainBody.styles.scss"
import { TechWall } from '../techwall/TechWall'
import TypeWriter from '../typewriter/TypeWriter'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {routesList} from '../../routes/AllRoutes'
// import LightSource from '../lightSource/LightSource'

export const MainBody = () => {
  const me = ['a full stack developer', 'a freelancer', 'a teacher', 'a traveler', 'a front-end developer']

  return <div className='mainContainer'>
    <div class='section'>
      {/* Heading */}
      <div class="heroText">Hi! I am Sourab Kapoor</div>
      {/* Changing subhero */}
      <div className='subHero'>
        <span>{`- `}</span>
        <TypeWriter texts={me} typingSpeed={200} pauseSpeed={100} />
      </div>
    </div>
    

    {/* Sub Heading or a statement line here with background of all the techs I know. floating icons in this area */}
    <div className='skillsWall'>
      <TechWall />
      <p>With a passion for creating dynamic and user-friendly applications, I specialize in full stack development. I have a knack for solving complex challenges with a variety of tools.
      </p>
    </div>

    {/* Link to about and project page */}
    <div className='extraSubLink'>
      <div className='moreAbout'>
        <>The person behind the code</>
        <a href={routesList.about}><button class="customButton"><ArrowForwardIcon /></button></a>
      </div>

      {/* Link to projects page */}
      <div className='projects'>
        <>Have a look at my coding adventures!</>
        <a href={routesList.projects}><button class="customButton"><ArrowForwardIcon /></button></a>
      </div>

      <div className='resume'>
        <>See my skills and experience in black and white.</>
        <a href={routesList.resume}><button class="customButton"><ArrowForwardIcon /></button></a>
      </div>
    </div>

    {/* <div style={{position: "relative"}}>
      <LightSource />
    </div> */}
  </div>
}