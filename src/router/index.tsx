import {
  createBrowserRouter,
} from "react-router-dom"
import { lazy } from 'react'
import Home from '../views/home'
import { BasicLogin } from '../views/login'
const UiIcon = lazy(() => import('../views/ui/icon'))
const Uniapp = lazy(() => import('../views/android/uniapp'))
const Chart = lazy(() => import('../views/ui/chart'))
const Btn = lazy(() => import('../views/ui/btn'))
const Lottie = lazy(() => import('../views/ui/lottie'))
const Img = lazy(() => import('../views/resource/img'))
const Video = lazy(() => import('../views/resource/video'))
const NotFound = lazy(() => import('../views/404'))
const Three = lazy(() => import('../views/3d/three'))
const Awesome = lazy(() => import('../views/ui/awesome'))
const Cesium = lazy(() => import('../views/map/cesium'))
const Leaflet = lazy(() => import('../views/map/leaflet'))
const AntD = lazy(() => import('../views/ui/antd'))
const ElementPlus = lazy(() => import('../views/ui/element-plus'))
const SubWay = lazy(() => import('../views/other/subway'))

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
        path: 'other',
        children: [
          { path: 'subway', element: <SubWay /> }
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