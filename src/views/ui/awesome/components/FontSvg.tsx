import { useEffect, useState } from 'react'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  const [time, setTime] = useState('223')
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toTimeString().substring(0, 8)
      setTime(time)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="w-full h-full flex justify-center items-center">
      {
        time && (
          <svg width="200" height="50">
            <symbol id="text">
              <text x="0" y="40" strokeDasharray="10 34" strokeWidth="2" fill="transparent" style={{fontSize: '50px'}}>{time}</text>
            </symbol>
            <use className="t-svg-text" href="#text"></use>
            <use className="t-svg-text" href="#text"></use>
            <use className="t-svg-text" href="#text"></use>
          </svg>
        )
      }
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })