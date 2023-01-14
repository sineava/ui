import {
  createBrowserRouter,
} from "react-router-dom"
import { lazy } from 'react'
import Home from '../views/home'
import { BasicLogin } from '../views/login'
const UiIcon:any = lazy(() => import('../views/ui/icon'))
const Uniapp:any = lazy(() => import('../views/android/uniapp'))
const Chart:any = lazy(() => import('../views/ui/chart'))
const Btn:any = lazy(() => import('../views/ui/btn'))
const Lottie:any = lazy(() => import('../views/ui/lottie'))
const Img:any = lazy(() => import('../views/resource/img'))
const Video:any = lazy(() => import('../views/resource/video'))
const NotFound:any = lazy(() => import('../views/404'))
const Three:any = lazy(() => import('../views/3d/three'))
const Awesome:any = lazy(() => import('../views/ui/awesome'))
const Cesium:any = lazy(() => import('../views/map/cesium'))
const Leaflet:any = lazy(() => import('../views/map/leaflet'))
const AntD:any = lazy(() => import('../views/ui/antd'))
const ElementPlus:any = lazy(() => import('../views/ui/element-plus'))

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
          { path: 'uniapp', element: <Uniapp /> },
          { path: 'btn', element: <Btn /> },
          { path: 'lottie', element: <Lottie /> },
          { path: 'chart', element: <Chart /> },
          { path: 'antd', element: <AntD /> },
          { path: 'element-plus', element: <ElementPlus /> },
          { path: 'awesome', element: <Awesome /> }
        ]
      },
      // {
      //   path: 'android',
      //   children: [
      //     { path: 'uniapp', element: <Uniapp /> },
      //   ]
      // },
      {
        path: 'map',
        children: [
          { path: 'cesium', element: <Cesium /> },
          { path: 'leaflet', element: <Leaflet /> }
        ]
      },
      {
        path: '3d',
        children: [
          { path: 'three', element: <Three /> }
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