import { useState } from 'react'
import { Map, Girl } from './components'
import emitter from '../../../utils/ev'
import { useEffect } from 'react'

const initialTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.className = initialTheme
export default function() {
  const [theme, setTheme] = useState(initialTheme)
  useEffect(() => {
    emitter.on('theme', (msg: any) => {
      setTheme(msg)
    })
  }, [])
  return (
    <div className="flex gap-2">
      <Map theme={theme} />
      <Girl theme={theme} />
    </div>
  )
}