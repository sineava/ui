import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import 'leaflet.chinatmsproviders'
import { Slider } from 'antd'

export default function() {
  let map: any
  const [hue, setHue] = useState(180)
  // 初始化地图
  const initMap = () => {
    map = L.map('leaflet-map', {
      center: [30.6574, 104.0658],
      zoom: 13
    })
    addLayer()
  }
  // 添加切片图层
  const addLayer = () => {
    L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
      maxZoom: 18,
      minZoom: 5
    }).addTo(map)
  }
  useEffect(() => {
    initMap()
  }, [])
  return (
    <div className="w-full h-full relative">
      <div className="absolute left-[12px] top-20 w-[20px] h-[100px] p-4 rounded bg-white z-10 flex justify-center items-center">
        <Slider vertical defaultValue={hue} max={180} onChange={(num) => setHue(num)} />
      </div>
      <div id="leaflet-map" className="!z-0 w-full h-full" style={{ '--hue': `hue-rotate(${hue}deg)` } as React.CSSProperties}></div>
    </div>
  )
}
