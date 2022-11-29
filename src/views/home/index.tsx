import { useEffect, useState } from 'react'
import Left from './components/Left'
import { Outlet, Route, Navigate, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import Lottie from 'lottie-react'
import json from '../../assets/lottie/cat.json'
import SvgIcon from '../../components/SvgIcon'
import emitter from '../../utils/ev'

const initialTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.className = initialTheme


function Home() {
  const [theme, setTheme] = useState(initialTheme)
  const [charging, setCharging] = useState(false)
  const [step, setStep] = useState(0)
  useEffect(() => {
    (navigator as any).getBattery().then((battery: any) => {
      const process = Math.ceil(battery.level * 4)
      setStep(process)
      setCharging(battery.charging)
      battery.addEventListener('chargingchange', () => {
        setStep(process)
        setCharging(battery.charging)
      })
    })
  }, [])
  useEffect(() => {
    if (charging) {
      const timer = setInterval(() => {
        const process = step === 4 ? 1 : step + 1
        setStep(process)
      }, 2000)
      return () => clearInterval(timer)
    }
  }, [step, charging])
  const toggle = () => {
    const mode = theme === 'dark' ? 'light' : 'dark'
    emitter.emit('theme', mode)
    document.documentElement.setAttribute('class', mode === 'light' ? '' : 'dark')
    localStorage.setItem('theme', mode)
    setTheme(mode === 'light' ? '' : 'dark')
  }
  return (
    <div className="dark:bg-gray-900 w-full h-screen flex">
      <div className="w-[240px] relative">
        <Left />
      </div>
      <div className="flex-1">
        <div className="dark:bg-gray-900 dark:text-[#fff] bg-[#fff] h-[60px] flex justify-end items-center py-2 px-4">
          <div className="dark:border-white w-[24px] h-[14px] border-2 border-gray-900 rounded relative p-[2px]">
            <div className={`absolute h-[6px] bg-blue-700 rounded-sm`} style={{ width: `${(step - 1) * 25}%` }}></div>
          </div>
          <div className="dark:bg-gray-700 flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer ml-4" onClick={toggle}>
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

function Auth() {
  const [token] = useState(localStorage.getItem('token'))
  console.log(token)
  return token ? <Home /> : <Routes><Route path="*" element={<Navigate to="/login" replace />} /></Routes>
}

export default Auth