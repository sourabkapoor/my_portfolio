import React from 'react'
import { MainBody } from '../components/mainBody/MainBody';
import {routesList} from "./AllRoutes"

export const routes = [
  {
    path: routesList.home,
    element: <MainBody />,
  },
  {
    path: routesList.about,
    element: <div>About</div>
  },
  {
    path: routesList.projects,
    element: <div>Projects</div>
  }
]