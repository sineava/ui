import { useRef, useState } from 'react'
import QRCode from 'qrcode'
import Alert from '../../../components/Alert'
import { hexToRgb } from '../../../utils'
import Avatar from '../../../assets/avatar.png'

export default function() {
  const [color, setColor] = useState('#00b894')
  const [color2, setColor2] = useState('#2E365C')
  const [error, setError] = useState(false)
  const [url, setUrl] = useState(Avatar)
  const [val, setVal] = useState('base')
  const [ctxUrl, setCtxUrl] = useState('')
  const [canvasUrl, setCanvasUrl] = useState('')
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
  const code = () => {
    QRCode.toDataURL('https://sineava-ui.netlify.app/', {
      color: {
        dark: color,
        light: color2
      }
    }).then((url: string) => {
      setCanvasUrl(url)
    })
  }
  const handle = (e: any) => {
    setVal('')
    setVal(e.target.value)
  }
  const handleSure = () => {
    switch (val) {
      case 'base':
        cutout()
        break
      case 'code':
        code()
        break
    }
  }
  return (
    <div>
      { error && <Alert /> }
      <div className="flex p-2 text-sm">
        <div className="flex items-center">
          <select className="dark:bg-gray-900 dark:text-[#fff] w-[200px] outline-none rounded select-sm h-[37px] font-normal" defaultValue={val} onChange={handle}>
            <option value="base">更换底色</option>
            <option value="code">二维码</option>
          </select>
        </div>
        <div className="dark:bg-gray-900 bg-white dark:text-[#fff] flex items-center rounded ml-2 py-1 px-2">
          {
            val === 'base' && <div className="flex items-center gap-2 text-sm">
              <input className="cursor-pointer" type="color" value={color} ref={colorRef} onChange={(e: any) => setColor(e.target.value)} />
            </div>
          }
          {
            val === 'code' && (
              <div className="flex items-center gap-2 text-sm">
                c1: <input className="cursor-pointer" type="color" value={color} ref={colorRef} onChange={(e: any) => setColor(e.target.value)} />
                c2: <input className="cursor-pointer" type="color" value={color2} ref={colorRef} onChange={(e: any) => setColor2(e.target.value)} />
              </div>
            )
          }
        </div>
        <div className="flex items-center">
          <button className="dark:bg-gray-900 bg-white dark:text-white px-4 py-2 rounded ml-2" onClick={handleSure}>确定</button>
        </div>
      </div>
      <input ref={fileRef} type="file" hidden accept="image/*" onChange={sure} />
      {
        val === 'base' && url && (
          <div className="flex">
            <div className="dark:bg-gray-900 bg-[#fff] rounded mx-2 w-[300px]  t-img-container"><img className="w-[300px]" ref={imgRef} src={url} /></div>
            { ctxUrl && <div className="dark:bg-gray-900 bg-[#fff] w-[300px] rounded t-img-container"><img ref={ctxImgRef} src={ctxUrl} /></div> }
          </div>
        )
      }
      {
        val === 'code' && canvasUrl && (
          <div className="flex">
            <div className="dark:bg-gray-900 bg-[#fff] w-[300px] rounded mr-2 qrcode-container ml-2 relative t-img-container">
              <img className="w-[300px] h-[300px]" src={canvasUrl} />
            </div>
          </div>
        )
      }
    </div>
  )
}