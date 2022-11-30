import { useState } from 'react'
import { Map, Girl, MapTxt, GirlTxt } from './components'
import emitter from '../../../utils/ev'
import { useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula'
import SvgIcon from '@/components/SvgIcon'

const initialTheme = localStorage.getItem('theme') || 'dark'
document.documentElement.className = initialTheme
export default function() {
  const [theme, setTheme] = useState(initialTheme)
  const [text, setText] = useState('')
  useEffect(() => {
    emitter.on('theme', (msg: any) => {
      setTheme(msg)
    })
  }, [])
  const show = (str:string) => setText(str)
  return (
    <div className="flex gap-2">
      <Map theme={theme} show={show}>
        <div className="opacity-0 absolute top-[10px] right-[10px] cursor-pointer" onClick={() => setText(MapTxt)}>
          <SvgIcon icon="command-line" color={theme === 'dark' ? '#fff' : '#3f8cff'} />
        </div>
      </Map>
      <Girl theme={theme} show={show}>
        <div className="opacity-0 absolute top-[10px] right-[10px] cursor-pointer" onClick={() => setText(GirlTxt)}>
          <SvgIcon icon="command-line" color={theme === 'dark' ? '#fff' : '#3f8cff'} />
        </div>
      </Girl>
      {
        text && (
          <div className="fixed top-[60px] right-0 w-[800px]">
            <div className="bg-[#282a36] w-full flex justify-start p-1" onClick={() => setText('')}>
              <div className="rounded-full cursor-pointer border-2 border-[#ff0012] bg-[#ff0012] w-[20px] h-[20px] flex justify-center items-center ml-1">
                <SvgIcon icon="mark" color="#fff" strokeWidth={6} size={14} />
              </div>
            </div>
            <CodeMirror
              value={text}
              theme={dracula}
              height="900px"
              extensions={[javascript({ jsx: true })]}
            />
          </div>
        )
      }
    </div>
  )
}