import React from 'react'
import "./About.styles.scss"
import heroImage from "../../assets/images/heroImage.jpeg"
import { ProgressCard } from '../progressCard/ProgressCard'
import signalx from "../../assets/images/signalx.jpg"
import localytee from "../../assets/images/localytee.jpg"
import gbc from "../../assets/images/george_brown_college_logo.jpg"
import ycet from "../../assets/images/ycet.png"
import st from "../../assets/images/st.jpg"
import { Parallax } from '../parallax/Parallax'

const images = require.context('../../assets/life', true)
const imageList = images.keys().map(image => images(image));

export const About = () => {
  const experiece = [
    {
      logo: signalx,
      brand: "SignalX",
      duration: "July 2022 - August 2023",
      info: [
        "Lead the development of user-centric interfaces for data-centric and client-facing applications, resulting in a 25% increase in user satisfaction.",
        "Collaborated closely with UX/UI designers to translate design concepts into visually appealing and intuitive user interfaces",
        "Owned solutions from end to end, engaging directly with stakeholders to manage complexity and ensure success metrics were met.",
        "Conducted code reviews for peers to ensure code quality and adherence to best practices",
      ]
    },
    {
      logo: localytee,
      brand: "Localytee",
      duration: "August 2020 - July 2022",
      info: [
        "Contributed as one of the team player for the core development group in project named Quession.",
        "Led the development of reusable, modular components, improving project delivery timelines by 30%.",
        "Utilized technologies like ReactJs, Redux, React Routers, HTML, CSS, React Native, Python, Django, GraphQL, AWS, Fast Api and websockets.",
      ]
    }
  ]

  const education = [
    {
      logo: gbc,
      brand: "George Brown College",
      duration: "September 2023 - August 2024",
      degree: [
        "Post-Graduate Certificate in Cyber Security",
      ]
    },
    {
      logo: ycet,
      brand: "Yogananda College of Engineering and Technology",
      duration: "August 2016 - December 2020",
      degree: [
        "Completed Bachelor's of Engineering in Computer Science",
      ]
    },
    {
      logo: st,
      brand: "St Xavier Convent School",
      duration: "August 2014 - May 2016",
    }
  ]

  return <div className='about'>
    <div className='sectionHeading'>Let me Introduce Myself...</div>
    {/* intro */}
    <div className='intro'>
      <div className='info'>
        I’m Sourab Kapoor, a self-taught Full Stack Developer who loves building cool stuff for the web (and occasionally breaking it while experimenting). With over 3+ years of experience, I’ve tackled different kinds of projects with some amazing teams, learning a ton along the way about what works—and what doesn’t.
        <br/>
        <br/>
        When I’m not coding with React, Node.js, Django, or Python (or trying to figure out why something isn’t working), you’ll probably find me planning my next trip or hunting for a great cup of coffee. I’m all about blending creativity with code and keeping things light while crafting apps that people actually enjoy using. Life’s too short for bad coffee and boring websites, right?
      </div>
      {/* Hero Image */}
      <img className='heroImage' src={heroImage} alt="..." fetchPriority="high"></img>
    </div>

    {/* Skills */}
    {/* <div>
      <div className='sectionHeading'>What I bring to the table</div>
      
    </div> */}

    {/* experience */}
    <div>
      <div className='sectionHeading mobileSection'>Experience</div>
      {experiece.map((jobs, key) => {
        return <ProgressCard key={`expereice${key}`} {...jobs} />
      })}
    </div>

    {/* Education */}
    <div>
      <div className='sectionHeading mobileSection'>Education</div>
      {education.map((edu, key) => {
        return <ProgressCard key={`eductaion${key}`} {...edu} />
      })}
    </div>

    {/* Extra curicular */}
    <div>
      <div className='sectionHeading mobileSection'>Because life’s not all about staring at a screen!</div>
      <Parallax baseVelocity={-5}>
        <div className='parallaxImages'>
          {imageList?.slice(0, 9).map((img, key) => {
            return <img src={img} alt={".."} key={`firstRow${key}`} />
          })}
        </div>
      </Parallax>
      <Parallax baseVelocity={5}>
        <div className='parallaxImages'>
          {imageList?.slice(9, 18).map((img, key) => {
            return <img src={img} alt={".."} key={`SecondRow${key}`} />
          })}
        </div>
      </Parallax>
      <Parallax baseVelocity={-5}>
        <div className='parallaxImages'>
          {imageList?.slice(19, 27).map((img, key) => {
            return <img src={img} alt={".."} key={`ThirdRow${key}`} />
          })}
        </div>
      </Parallax>
    </div>
    
    {/* Things I enjoy doing */}
    <div>
      <div className='sectionHeading mobileSection'>Things I do out of curiosity and passion</div>
      {/* Teacher */}
      <div className="myCard">
        <img className='img' alt=".." src="https://2022.sommetnumerique.ca/fr/sponsors/download/logo/19" />
        <div className='infoSection'>
          <div className='heading'>Teacher</div>
          <span className='info'>
            I’m like a coding tour guide, helping people from all walks of life and every corner of the globe navigate the world of programming. Together, we turn ideas into dream projects—one line of code at a time. Wanna join the journey? Check out my profile&nbsp;
            <a target='_blank' href='https://www.superprof.co.uk/learn-web-development-with-personalized-lessons-from-html-css-and-javascript-advanced-frameworks-like-react-node-and-django.html' rel="noreferrer">here!</a>
          </span>
        </div>
      </div>
      {/* Freelancer */}
      <div className="myCard">
        <img className='img' alt=".." src="https://www.svgrepo.com/show/331630/upwork.svg" />
        <div className='infoSection'>
          <div className='heading'>Freelance Developer</div>
          <span className='info'>
            I’m also a freelancer who’s all about teaming up on quality projects and helping others bring their ideas to life. It’s a win-win—I get to learn new skills, stay inspired, and keep the creativity flowing!
          </span>
        </div>
      </div>
      {/* Reasearch paper writer */}
      <div className="myCard">
        <img className='img' alt=".." src="https://www.liveabout.com/thmb/5HTVKgTZBAPkmscR-ZiStaNeFMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/writer2-172409300-58ae4fbb3df78c345b7c5b62.jpg" />
        <div className='infoSection'>
          <div className='heading'>Research Paper Writer</div>
          <span className='info'>
            I have writter a number of research paper and review papers. Some of my work are <span className='bold'>Pattern Recognition; Approaches and Applications</span>, <span className='bold'>Artificial Neural Networks; Latest Trends and Their Comparative Analysis</span> and <span className='bold'>Wireless Sensor Network</span>.
          </span>
        </div>
      </div>
      {/* Traveler */}
      <div className="myCard">
        <img className='img' alt=".." src="https://media.wired.com/photos/5a5f8e04578ad833ef6878da/master/w_2560%2Cc_limit/Away_Carry-On_TopArt.jpg" />
        <div className='infoSection'>
          <div className='heading'>Traveller</div>
          <span className='info'>
            And just in case you missed it—yes, I’m obsessed with traveling! It’s my ultimate brain detox and my excuse to explore new places, meet amazing people, and soak up all the adventures life throws at me. Got a trip in mind and need a travel buddy? Say no more—I’m already packing!
          </span>
        </div>
      </div>
    </div>
  </div>
}