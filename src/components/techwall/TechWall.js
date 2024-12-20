import React, {useRef} from 'react'
import { Bubble } from '../bubble/Bubble'
import './TechWall.styles.scss'

import react from '../../assets/icons/react.png'
import django from '../../assets/icons/django.png'
import js from '../../assets/icons/js.png'
import nodejs from '../../assets/icons/nodejs.png'
import python from '../../assets/icons/python.png'
import ast from '../../assets/icons/as.png'
import jest from "../../assets/icons/jest.png"
import aws from '../../assets/icons/aws.png'
import firebase from '../../assets/icons/firebase.png'
import docker from '../../assets/icons/docker.png'
import ubuntu from '../../assets/icons/ubuntu.png'
import jupyter from '../../assets/icons/Jupyter.png'

export const TechWall = () => {
  const constraintsRef = useRef(null)
  const myTech = [react, django, js, nodejs, python, ast, jest, aws, firebase, jupyter, ubuntu, docker]

  return <div className='conatiner' ref={constraintsRef}>
    {myTech.map((tech, key) => {
      return <Bubble
        key={`tech${key}`} 
        icon={tech} 
        ref={constraintsRef} />
    })}
  </div>
}