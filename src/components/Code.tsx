import { useState, useEffect } from 'react'
import emitter from '../utils/ev'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { StreamLanguage } from '@codemirror/language';
import { css as cssparse } from '@codemirror/legacy-modes/mode/css'
import { dracula } from '@uiw/codemirror-theme-dracula'
import SvgIcon from '../components/SvgIcon'

interface Type {
  html: string
  css?: string
  direction?: 'vertical' | 'horizontal'
}
const initialTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.className = initialTheme
export default (Component: any, { html, css, direction = 'horizontal' }: Type) => {
  const [theme, setTheme] = useState(initialTheme)
  const [htmlTxt, setHtmlTxt] = useState('')
  const [cssTxt, setCssTxt] = useState('')
  const toggle = (type: 'show' | 'clear') => {
    if (type === 'clear') {
      setHtmlTxt('')
      cssTxt && setCssTxt('')
    } else {
      setHtmlTxt(html)
      css && setCssTxt(css)
    }
  }
  useEffect(() => {
    emitter.on('theme', (msg: any) => {
      setTheme(msg)
    })
  }, [])
  return (
    <div className={`t-card dark:bg-gray-800 bg-white ${direction === 'vertical' && '!w-[375px] !h-[812px] border-none'}`}>
      <Component theme={theme} />
      <div className="opacity-0 absolute top-[10px] right-[10px] cursor-pointer hover:opacity-100" onClick={() => toggle('show')}>
        <SvgIcon icon="command-line" color={theme === 'dark' ? '#3f8cff' : '#3f8cff'} />
      </div>
      {
        htmlTxt && (
          <div className="fixed top-[60px] right-0 w-[1000px] z-50">
            <div className="bg-[#282a36] w-full flex justify-start p-1">
              <div className="rounded-full cursor-pointer border-2 border-[#ff0012] bg-[#ff0012] w-[20px] h-[20px] flex justify-center items-center ml-1" onClick={() => toggle('clear')}>
                <SvgIcon icon="mark" color="#fff" strokeWidth={6} size={14} />
              </div>
            </div>
            {
              cssTxt && (
                <CodeMirror
                  value={cssTxt}
                  theme={dracula}
                  height="300px"
                  extensions={[StreamLanguage.define(cssparse)]}
                />
              )
            }
            <CodeMirror
              value={htmlTxt}
              theme={dracula}
              height={cssTxt ? '550px' : '850px'}
              extensions={[javascript({ jsx: true })]}
            />
          </div>
        )
      }
    </div>
  )
}