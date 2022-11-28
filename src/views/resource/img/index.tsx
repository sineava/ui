import { useRef, useState } from 'react'
import Alert from '../../../components/Alert'
import { hexToRgb } from '../../../utils'

export default function() {
  const [color, setColor] = useState('#00b894')
  const [error, setError] = useState(false)
  const [url, setUrl] = useState('/api-img/picture-bed@1.0.7/common/avatar.png')
  const [ctxUrl, setCtxUrl] = useState('')
  const colorRef: any = useRef()
  const fileRef: any = useRef()
  const imgRef: any = useRef()
  const ctxImgRef: any = useRef()
  const trigger = () => {
    fileRef.current.click()
  }
  const sure = (e: any) => {
    const file = e.target.files[0]

    // 读取器
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e: any) => {
      setUrl(e.target.result)
    }
  }
  const cutout = () => {
    const img = imgRef.current
    if (!img) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }
    const [rc, gc, bc]: any = hexToRgb(colorRef.current.value)
    const canvas = document.createElement('canvas')
    const { width, height } = img
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(img, 0, 0, width, height)
    const imgData: any = ctx.getImageData(0, 0, width, height)
    for (let i = 0; i < imgData.data.length / 4; i++) {
      const [r, g, b]: any = [imgData.data[i*4], imgData.data[i*4+1],imgData.data[i*2]]
      if (r >= 250 && g >= 250) {
        imgData.data[i * 4] = rc
        imgData.data[i * 4 + 1] = gc
        imgData.data[i * 4 + 2] = bc
      }
    }
    ctx.putImageData(imgData, 0, 0)
    setCtxUrl(canvas.toDataURL())
  }
  return (
    <div>
      { error && <Alert /> }
      <div className="inline-flex justify-center items-center p-2">
        <button className="dark:bg-gray-900 px-4 py-2 t-button t-shadow-blue bg-[#3F8CFF] text-[14px]" type="button" onClick={trigger}>选择图片</button>
        <button className="px-4 py-2 t-button t-shadow-gray ml-2 bg-[#7f8fa6] text-[14px]" type="button" onClick={cutout}>
          <span className="ml-1">换底色</span>
        </button>
        <input className="ml-2 rounded" type="color" value={color} ref={colorRef} onChange={(e: any) => setColor(e.value)} />
      </div>
      <input ref={fileRef} type="file" hidden accept="image/*" onChange={sure} />
      <div className="flex">
        { url && <div className="dark:bg-gray-900 bg-[#fff] w-[320px] p-[10px] rounded mr-2"><img className="w-[300px]" ref={imgRef} src={url} /></div> }
        { ctxUrl && <div className="dark:bg-gray-900 bg-[#fff] w-[320px] p-[10px] rounded mr-2"><img ref={ctxImgRef} src={ctxUrl} /></div> }
      </div>
    </div>
  )
}