import {
  createBrowserRouter,
} from "react-router-dom"
import { lazy } from 'react'
import Home from '../views/home'
import { BasicLogin } from '../views/login'
const UiIcon  = lazy(() => import('../views/ui/icon'))
const Btn  = lazy(() => import('../views/ui/btn'))
const Lottie = lazy(() => import('../views/ui/lottie'))
const Img = lazy(() => import('../views/resource/img'))
const Video = lazy(() => import('../views/resource/video'))
const NotFound = lazy(() => import('../views/404'))

const router = createBrowserRouter([
  {
    path: '/login',
    element: <BasicLogin />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'ui',
        children: [
          { path: 'icon', element: <UiIcon /> },
          { path: 'btn', element: <Btn /> },
          { path: 'lottie', element: <Lottie /> }
        ]
      },
      {
        path: 'resource',
        children: [
          { path: 'img', element: <Img /> },
          { path: 'video', element: <Video /> }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router