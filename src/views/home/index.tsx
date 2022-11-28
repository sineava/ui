import Left from './components/Left'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Lottie from 'lottie-react'
import json from '../../assets/lottie/cat.json'

function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[220px]">
        <Left />
      </div>
      <div className="flex-1 bg-[#F4F9FD] pl-4 pt-4 overflow-y-auto scroll-smooth">
        <Suspense fallback={
          <div className="w-full h-full flex justify-center items-center">
            <Lottie className="w-[500px] mt-10" animationData={json} />
          </div>
        }>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Home