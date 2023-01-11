import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import SvgIcon from '../../../components/SvgIcon'

interface IconType {
  name: string
  icon?: string
  path: string
  children?: string[]
}

export default function() {
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [avatar] = useState(JSON.parse(localStorage.getItem('user')!)?.avatar || Logo)
  const list = [
    { path: '/ui', icon: 'swatch', name: 'UI库', children: [
      { path: '/ui/icon', name: '图标' },
      { path: '/ui/chart', name: '图表' },
      { path: '/ui/lottie', name: 'lottie' },
      { path: '/ui/antd', name: 'antd' },
      { path: '/ui/awesome', name: 'awesome' }
    ] },
    { path: '/android', icon: 'android', name: '安卓', children: [
      { path: '/android/uniapp', name: 'uniapp' }
    ] },
    { path: '/map', icon: 'map', name: '地图', children: [
      { path: '/map/cesium', name: 'Cesium' }
    ] },
    { path: '/3d', icon: 'cube', name: '3D', children: [
      { path: '/3d/three', name: 'Three.js' }
    ] },
    { path: '/resource', icon: 'folder-minus', name: '流媒体', children: [
      { path: '/resource/img', name: '图像' },
      { path: '/resource/video', name: '视频' }
    ] }
  ]
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    document.addEventListener('click', function(){
      setTrigger(false)
    })
  })

  useEffect(() => {
    const path = `/${location.pathname.split('/')[1]}`
    list.forEach((x: any, i: number) => {
      if (x.path === path) setCurrent(i)
    })
  }, [location.pathname])

  function menuClick(e: any, i: number) {
    e.stopPropagation()
    setCurrent(i)
    !trigger && setTrigger(true)
  }
  function toView(path: string) {
    setTrigger(false)
    navigate(path, {replace: true})
  }
  const menu = list.map((x: any, i: number) => 
    <li
      className={`t-menu-item h-[40px] w-full text-[#7D8592] dark:text-[#fff] font-semibold cursor-pointer flex my-4 items-center pl-2 ${current === i && 't-menu-item-select'}`}
      key={i}
      onClick={(e: any) => menuClick(e, i)}
    >
      <div className="inline-block w-[24px] h-[24px]">
        <SvgIcon icon={x.icon} color={current === i ? '#3F8CFF' : '#7D8592'} />
      </div>
      <span className="ml-2">{x.name}</span>
      {
        trigger && current === i && x.children && x.children.length > 0 && (
          <div className="dropdown dropdown-open absolute -right-5 top-0">
            <ul tabIndex={0} className="dark:bg-gray-900 dark:text-[#fff] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-[#7D8592]">
              {
                x.children?.map((x: IconType, n: number) => <li onClick={() => toView(x.path)} key={n}><a className="t-bg">{x.name}</a></li>)
              }
            </ul>
          </div>
        )
      }
    </li>
  )
  return (
    <div className="px-[16px] relative">
      <div className="my-[50px] flex items-center">
        <img className="w-[50px] h-[50px] mr-4 cursor-pointer rounded" src={avatar} />
        <span className="text-[20px] font-semibold dark:text-[#fff]">daisyUI</span>
      </div>
      <ul className="bg-base-100 w-full relative text-[14px] dark:bg-gray-900">
        {menu}
      </ul>
      <button className="fixed left-12 bottom-4 dark:bg-gray-800 dark:border border border-[#fff] dark:border-[#3F8CFF] t-login mt-[30px] px-6 py-2 t-button bg-[#3F8CFF] flex justify-center items-center" type="button" onClick={() => navigate('/login')}>
        <span className="text-[14px] mr-2 font-normal">退出登录</span>
        <SvgIcon icon="right-arrow" color="#fff" size={20} />
      </button>
    </div>
  )
}