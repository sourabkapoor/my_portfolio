import React from 'react'
import { MainBody } from '../components/mainBody/MainBody';
import {About} from "../components/about/About"
import {routesList} from "./AllRoutes"

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
    element: <div>Projects</div>
  }
]