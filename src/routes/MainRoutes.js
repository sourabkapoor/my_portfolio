import React from 'react'
import { MainBody } from '../components/mainBody/MainBody';
import {About} from "../components/about/About"
import {routesList} from "./AllRoutes"
import { Projects } from '../components/projects/Projects';
import Resume from '../components/resume/Resume';

export const routes = [
  {
    path: routesList.home,
    element: <MainBody />,
  },
  {
    path: routesList.about,
    element: <About />
  },
  {
    path: routesList.projects,
    element: <Projects />
  },
  {
    path: routesList.resume,
    element: <Resume />
  }
]