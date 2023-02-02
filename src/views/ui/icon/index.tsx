import { useEffect, useState } from 'react'
import { convertCamelToHyphen } from '../../../utils'
import Tabs from '../../../components/Tabs'
import * as OutLineIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'
import SvgIcon from '../../../components/SvgIcon'

const IconOutline: any = OutLineIcons
const IconSolid: any = SolidIcons
export default function() {
  const [current, setCurrent] = useState(0)
  const [copying, setCopying] = useState(false)
  const types = ['Outline', 'Solid']
  const [char, setChar] = useState('')
  const toggle = (i: number) => {
    setCurrent(i)
  }
  useEffect(() => {
    if (char) {
      navigator.clipboard.writeText(`${char}`)
    }
  }, [char])
  return (
    <div>
      <div className="dark:text-[#fff] flex items-center">
        <Tabs types={types} current={current} toggle={toggle} />
        <a className="ml-2 cursor-pointer" onClick={() => window.open('https://heroicons.com/', '_blank')}>
          <SvgIcon icon="github" color="#fff" />
        </a>
      </div>
      <div className="flex flex-wrap mt-2">
        { Reflect.ownKeys(current === 0 ? IconOutline : IconSolid).map((x: any, i: number) => {
          if (typeof x === 'string') {
            const Comp = (current === 0 ? IconOutline : IconSolid)[x]
            const convert = convertCamelToHyphen(x).slice(1, -5)
            return (
              <span key={i} className="dark:bg-gray-900 t-svg-container w-[136px] h-[136px] flex flex-col justify-center items-center bg-[#fff] m-2 cursor-pointer rounded-lg relative" onClick={() => setChar(convert)}>
                <Comp />
                <span className="text-[12px] absolute bottom-2 ml-auto text-[#9ba7ad] select-none">{ convert.length > 12 ? `${convert.slice(0, 12)}...` : convert }</span>
                {/* 遮罩 */}
                <div className="absolute t-copy-mask h-1/3" onClick={() => setCopying(true)} onMouseLeave={() => setCopying(false)}>
                  <SvgIcon icon="copy" color="#fff" />
                  { copying && <span className="t-copy-text-success">复制成功</span> }
                </div>
              </span>
            )
          }
          return null
        }) }
      </div>
    </div>
  )
}