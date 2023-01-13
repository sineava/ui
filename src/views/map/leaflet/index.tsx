import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import AMapLoader from '@amap/amap-jsapi-loader'
import { Slider } from 'antd'
import 'leaflet.chinatmsproviders'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/markercluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

const Select = ({ start, end, address }: { start: string, end: string, address: [] }) => {
  return (
    <div>
      { JSON.stringify(address) }
    </div>
  )
}
export default function() {
  let map: any
  let AMap: any
  const [address, setAddress] = useState([])
  const [hue, setHue] = useState(180)
  const [lock, setLock] = useState(false)
  const [placeSearch, setPlaceSearch]: any = useState(null)
  const [position, setPosition]: any = useState({ start: '', end: '' })
  // 初始化地图
  const initMap = async () => {
    AMap = await AMapLoader.load({
      key: '9bbc890a65e9963640417b3a609d7dbf',
      version: '2.0',
      plugins: ['AMap.StationSearch', 'AMap.PlaceSearch']
    })
    map = L.map('leaflet-map', {
      center: [30.6574, 104.0658],
      zoom: 13
    })
    setPlaceSearch(new AMap.PlaceSearch({city: '028'}))
    addStations()
    addListener()
    addLayer()
  }
  // 添加公交站点
  const addStations = () => {
    const markers = L.markerClusterGroup()
    AMap.plugin(['AMap.StationSearch'], function() {
      const station = new AMap.StationSearch({
        pageIndex: 1,
        pageSize: 100,
        city: '028'
      })
      station.search('地铁站', (status: unknown, result: any) => {
        if (status === 'complete') {
          const { stationInfo } = result
          stationInfo.forEach((station: any, i: number) => {
            const { name, location: { lng, lat } } = station
            const marker = L.marker(new L.LatLng(lat, lng), {
              icon: L.icon({
                iconUrl: '/station.png',
                iconSize: [32, 41]
              })
            })
            marker.bindPopup(name).openPopup()
            markers.addLayer(marker)
          })
          map.addLayer(markers)
        }
      })
    })
  }
  // 添加缩放监听
  const addListener = () => {
    map.on('zoomend', (e: any) => {
      const scale = e.target.getZoom()
      console.log(scale)
    })
  }
  // 添加切片图层
  const addLayer = () => {
    L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
      maxZoom: 18,
      minZoom: 5
    }).addTo(map)
  }
  const search = (type: 'start' | 'end', e: any) => {
    const keyword = e.target.value
    const data = {
      ...position,
      [type]: keyword || ''
    }
    console.log(placeSearch)
    placeSearch?.search(keyword, function (status: string, result: any) {
      if (status === 'complete') {
        const pois = result?.poiList?.pois
        console.log(pois)
        setAddress(JSON.parse(JSON.stringify(pois)))
      }
    })
    setPosition(data)
  }
  useEffect(() => {
    initMap()
  }, [])
  return (
    <div className="w-full h-full relative">
      <div className="absolute right-[12px] top-4 w-[200px] p-4 rounded z-10 flex flex-col dark:bg-gray-900 bg-white">
        <input placeholder="起点" value={position.start} className="input input-accent input-xs rounded"
          onChange={(e: any) => search('start', e)}
          onCompositionEnd={(e: any) => { search('start', e)}}
        />
        <input placeholder="终点" value={position.end} className="input input-accent input-xs rounded mt-4 mb-2"
          onChange={(e: any) => search('start', e)}
          onCompositionEnd={(e: any) => { search('end', e)}}
        />
        <Slider className="h-[20px]" defaultValue={hue} max={180} onChange={(num) => setHue(num)} />
        {
          address ? <Select {...position} address={address} /> : null
        }
      </div>
      <div id="leaflet-map" className="!z-0 w-full h-full" style={{ '--hue': `hue-rotate(${hue}deg)` } as React.CSSProperties}></div>
    </div>
  )
}
