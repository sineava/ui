import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import { antPath } from 'leaflet-ant-path';
import AMapLoader from '@amap/amap-jsapi-loader'
import { Slider } from 'antd'
import 'leaflet.chinatmsproviders'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import { parseRouteToPath } from '../../../utils/map'

interface Coors {
  type: string
  name: string
  lng: number
  lat: number
}

const Select = ({ type, address, setValue }: { type: string, address: any, setValue: ({type, name, lng, lat}: Coors) => void }) => {
  console.log(address)
  return (
    <div className={`absolute ${type === 'start' ? 'top-[48px]' : 'top-[88px]'} left-[16px] w-[204px] min-h-[20px] max-h-[180px] overflow-x-hidden overflow-y-auto flex-col text-xs bg-[#fff] text-[#808080] rounded`}>
      {
        address.map((item: any, i: number) => <div key={i} className="cursor-pointer overflow overflow-hidden py-[4px] px-[8px] hover:bg-[#eee]" onClick={() => setValue({ type, name: item.name, lng: item.location.lng, lat: item.location.lat })}>{item.name}</div>)
      }
    </div>
  )
}
let lock: boolean = false
let placeSearch: any
let AMap: any
let map: any
let path: any
export default function() {
  const [type, setType] = useState('')
  const [address, setAddress] = useState([])
  const [hue, setHue] = useState(180)
  const [position, setPosition]: any = useState({ start: '', end: '' })
  // 初始化地图
  const initMap = async () => {
    AMap = await AMapLoader.load({
      key: '9bbc890a65e9963640417b3a609d7dbf',
      version: '2.0',
      plugins: ['AMap.StationSearch', 'AMap.PlaceSearch', 'AMap.Driving']
    })
    map = L.map('leaflet-map', {
      center: [30.6574, 104.0658],
      zoom: 13
    })
    placeSearch = new AMap.PlaceSearch({city: '028'})
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
    if (lock) return
    const keyword = e.target.value
    const data = {
      ...position,
      [type]: keyword || ''
    }
    setPosition(data)
  }
  const down = (type: 'start' | 'end', e: any) => {
    if (e.nativeEvent.keyCode === 13) {
      placeSearch?.search(position[type], function (status: string, result: any) {
        if (status === 'complete') {
          const pois = result?.poiList?.pois
          setAddress(pois)
          setType(type)
        }
      })
    }
  }
  const setValue = ({type, name,lng, lat}: Coors) => {
    const data = {
      ...position,
      [type]: name || '',
      [`coor-${type}`]: [lng, lat]
    }
    setPosition(data)
    setType('')
  }
  const generate = () => {
    if (path) map.removeLayer(path)
    AMap.plugin('AMap.Driving', () => {
      const driving = new AMap.Driving({
        policy: AMap.DrivingPolicy.LEAST_TIME
      })
      driving.search(position['coor-start'], position['coor-end'], function (status: string, result: any) {
        if (status === 'complete') {
          path = antPath(parseRouteToPath(result.routes[0]), {
            delay: 400,
            dashArray: [10, 20],
            weight: 5,
            color: '#0000FF',
            pulseColor: '#FFFFFF',
            paused: false,
            reverse: false,
            hardwareAccelerated: true
          })
          map.addLayer(path)
          map.fitBounds(path.getBounds())
        }
      })
    })
  }
  useEffect(() => {
    initMap()
    document.addEventListener('click', function(){
      setType('')
    })
  }, [])
  return (
    <div className="w-full h-full relative">
      <div className="absolute right-[12px] top-3 w-[250px] p-4 rounded z-10 flex flex-col dark:bg-gray-900 bg-[#eee]">
        <input placeholder="起点: Enter查询目标点" value={position.start} className="input input-accent input-xs rounded w-[200px]"
          onChange={(e: any) => search('start', e)}
          onKeyDown={(e: any) => down('start', e)}
        />
        <input placeholder="终点: Enter查询目标点" value={position.end} className="input input-accent input-xs rounded my-4 w-[200px]"
          onChange={(e: any) => search('end', e)}
          onKeyDown={(e: any) => down('end', e)}
        />
        <button type="button" onClick={generate} className="dark:bg-gray-800 t-login w-[200px] h-[28px] !rounded-none t-button t-shadow-blue text-xs bg-[#3F8CFF] hover:bg-[#3F8CD1] flex justify-center items-center">
          生成驾车路线
        </button>
        <Slider className="absolute right-0 top-4 h-[104px]" vertical defaultValue={hue} max={180} onChange={(num) => setHue(num)} />
        {
          type ? <Select type={type} address={address} setValue={setValue} /> : null
        }
      </div>
      <div id="leaflet-map" className="!z-0 w-full h-full" style={{ '--hue': `hue-rotate(${hue}deg)` } as React.CSSProperties}></div>
    </div>
  )
}
