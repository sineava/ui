import { useState } from 'react'
import Left from './components/Left'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Lottie from 'lottie-react'
import json from '../../assets/lottie/cat.json'
import SvgIcon from '../../components/SvgIcon'

const initialTheme = document.documentElement.classList?.[0] || 'light'

function Home() {
  const [theme, setTheme] = useState(initialTheme)
  const toggle = () => {
    const list = document.documentElement.classList
    if (list.length > 0) { // 此时为暗黑模式
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }
  return (
    <div className="dark:bg-gray-900 w-full h-screen flex">
      <div className="w-[240px] relative">
        <Left />
      </div>
      <div className="flex-1">
        <div className="dark:bg-gray-900 dark:text-[#fff] bg-[#fff] h-[60px] flex justify-end py-2 px-4">
          <div className="dark:bg-gray-700 flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer" onClick={toggle}>
            <SvgIcon icon={ theme == 'dark' ? 'moon' : 'sun' } size={30} color={theme === 'dark' ? '#0ea5e9' : '#3f8cff'} fill="#0ea5e9" />
          </div>
        </div>
        <div className="dark:bg-gray-800 t-layout bg-[#F4F9FD] pl-2 pt-2 scroll-smooth overflow-y-auto">
          <Suspense fallback={
            <div className="w-full h-full flex justify-center items-center">
              <Lottie className="w-[500px] mt-10" animationData={json} />
            </div>
          }>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Home