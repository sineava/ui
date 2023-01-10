import { useState, useEffect } from 'react'
import { ConfigProvider, FloatButton, Popover, theme as antdTheme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Form from './components/Form'
import SvgIcon from '../../../components/SvgIcon'
import emitter from '../../../utils/ev'

dayjs.locale('zh-cn')

const initialTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.className = initialTheme
export default () => {
  const [theme, setTheme] = useState(initialTheme)
  const [primary, setPrimary] = useState('#5B8FF9')
  const colors = ['bg-[#5B8FF9]', 'bg-[#5AD8A6]', 'bg-[#5D7092]', 'bg-[#1E9493]', 'bg-[#945FB9]', 'bg-[#E86452]', 'bg-[#FF99C3]', 'bg-[#6DC8EC]']
  const content = (
    <div className="w-[140px] h-[70px] flex flex-wrap justify-evenly items-center">
      { colors.map(((color, i) => 
        <div
          key={i}
          className={`w-[30px] h-[30px] rounded cursor-pointer ${color}`}
          onClick={() => setPrimary(color.slice(4, -1))}
        />))
      }
    </div>
  )
  useEffect(() => {
    console.log(antdTheme.darkAlgorithm)
    emitter.on('theme', (msg: any) => {
      setTheme(msg)
    })
  }, [])
  return (
    <ConfigProvider locale={zhCN} theme={{
      token: {
        colorPrimary: primary
      },
      algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
    }}>
      <div className="m-antd" style={{'--primary': primary} as React.CSSProperties}>
        <Form primary={primary} />
      </div>
      <Popover title="" placement="left" trigger="hover" content={content}>
        <FloatButton className="flex justify-center items-center" type="primary" icon={<SvgIcon size={18} icon="theme" color="#fff" />} />
      </Popover>
    </ConfigProvider>
  )
}