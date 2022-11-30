import { useState } from 'react'
import SvgIcon from '../../../components/SvgIcon'
import Lottie from 'lottie-react'
import * as lotties from '../../../assets/lottie'
import { downloadJsonObj } from '../../../utils/index'

const list: any = lotties
export default function() {
  const [downloading, setDownloading] = useState(false)
  const download = (obj: Object, fileName: string) => {
    downloadJsonObj(obj, fileName)
    setDownloading(true)
  }
  return (
    <div className="flex flex-wrap relative">
      { Object.keys(list).map((key: any, i: number) => (
        <div key={i} className="dark:bg-gray-900 t-lottie-container bg-[#fff] w-[300px] h-[300px] flex justify-center items-center m-2 cursor-pointer rounded-lg relative">
          <Lottie className="w-[200px] mt-10" animationData={list[key]} />
          {/* 遮罩 */}
          <div className="absolute t-copy-mask z-10 h-[40px]" onClick={() => download(list[key], key)} onMouseLeave={() => setDownloading(false)}>
            <SvgIcon icon="copy" color="#fff" />
            { downloading && <span className="t-copy-text-success">下载成功</span> }
          </div>
        </div>
      )) }
    </div>
  )
}