import React from 'react'
import './Projects.styles.scss'
import github from "../../assets/icons/github.png"
import pokedex from "../../assets/projects/pokedex.PNG"
import cart from "../../assets/projects/cart.PNG"
import rps from "../../assets/projects/rps.PNG"
import task from "../../assets/projects/task.PNG"


export const Projects = () => {

  return (
    <div className='projectsContainer'>
      <div className='sectionHeading'>A showcase of my creations – some cool, some quirky, and all hand-coded with love.</div>

      <div className='projectsBlock'>
        {/* Pokedex */}
        <div className='projectMain'>
          <img className='projectImg' src={pokedex} alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>Pokedex</div>
            <div className='disc'>
              A Pokédex powered by the PokéAPI, showcasing a huge variety of Pokémon with cool features like filtering and searching. Built with React, styled to perfection with SCSS and Material UI, and keeping things snappy with MobX for state management. Gotta code 'em all!
            </div>
            <div className='actions'>
              <a className='visit' href='https://euphonious-starship-44425a.netlify.app/' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/pokedex' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
        {/* my cart */}
        <div className='projectMain'>
          <img className='projectImg' src={cart} alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>My Cart</div>
            <div className='disc'>
              It’s a simple React (and slightly sarcastic) app where users can browse through different categories, each packed with four hilariously fake products featuring made-up prices and snarky descriptions. It’s like shopping, but without the buyer’s remorse!
            </div>
            <div className='actions'>
              <a className='visit' href='https://sourabkapoor.github.io/myCart/' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/myCart' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
        {/* Emplyee of the year */}
        <div className='projectMain'>
          <img className='projectImg' src="https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fznde9s4sx4iysia7doil.png" alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>Employee of the Year</div>
            <div className='disc'>
              A cheeky Selenium script to automate the attendance process on the Keka platform. I whipped this up at my previous company to dodge the daily clock-in/clock-out hassle and save 4 precious minutes of my life. Bonus feature: location spoofing, because sometimes "working from home" meant working from wherever my adventures took me. Efficiency and creativity, all in one!
            </div>
            <div className='actions'>
              <a className='visit' href='https://github.com/sourabkapoor/Employee-of-the-year' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/Employee-of-the-year' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
        {/* Rock paper scissors */}
        <div className='projectMain'>
          <img className='projectImg' src={rps} alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>Rock Paper Scissors</div>
            <div className='disc'>
              A classic yet entertaining game of Rock, Paper, Scissors with a retro gaming twist. Built purely for fun (and to kill some time), it’s a best-of-5 battle against the computer to settle all of life’s most important decisions. Bonus feature: testing how “random” the JavaScript random function really is—spoiler, it’s questionable at best!
            </div>
            <div className='actions'>
              <a className='visit' href='https://glittering-swan-c58291.netlify.app/' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/R-P-S' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
        {/* task board */}
        <div className='projectMain'>
          <img className='projectImg' src={task} alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>Tasks Board</div>
            <div className='disc'>
              Whipped up a Vue application with a slick board-like interface for managing tasks. You can create groups, add tasks to them, and easily drag and drop tasks between groups when it’s time for a change. Fun fact: I learned Vue from scratch and built this entire project in just 4 hours—talk about a productive crash course!
            </div>
            <div className='actions'>
              <a className='visit' href='https://625de22e19d38c00b1c5b8d1--coruscating-griffin-38fb75.netlify.app/' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/Task-board' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
        {/* Forum */}
        <div className='projectMain'>
          <img className='projectImg' src="https://pentagram-production.imgix.net/506cc7b9-5998-4798-9420-3be03c1202e7/Reddit_Thumbnail.jpg?crop=edges&fit=crop&h=630&rect=4%2C0%2C2992%2C1870&w=1200" alt=".." />
          <div className='projectInfoBlock'>
            <div className='heading'>Forum</div>
            <div className='disc'>
              Built a Reddit clone using React and Firebase, with a focus on smooth developer experience and top-notch product quality. Packed with features like group creation, user profiles, authentication, and broadcast functionality. To keep things sharp, I added unit testing with Jest—because even clones deserve solid code!
            </div>
            <div className='actions'>
              <a className='visit' href='https://github.com/sourabkapoor/forum' target='_blank' rel="noreferrer">Visit</a>
              <a href='https://github.com/sourabkapoor/forum' target='_blank' rel="noreferrer">
                <img src={github} alt='..' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}