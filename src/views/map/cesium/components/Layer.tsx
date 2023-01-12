import { useRef, useEffect, useState } from 'react'
import domtoimage from 'dom-to-image'
import { Viewer,
  createWorldTerrain,
  Cartesian3,
  Color,
  DistanceDisplayCondition,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Math as CMath,
  GeoJsonDataSource,
  ImageMaterialProperty,
  HeightReference
} from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { cesiumOption } from '../../../../utils/map'
import roadJSON from './road.json'

const Position = ({ position }: any) => {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full h-[40px]">
      <div className="absolute w-full h-full bg-black opacity-40"></div>
      <div className="absolute w-full h-full text-white z-30 flex justify-end items-center text-xs">
        <span>经度: { position.lng }</span>
        <span className="ml-2">纬度: { position.lat }</span>
        <span className="ml-2">高程: { position.height }</span>
        <span className="ml-2">俯仰角: { position.pitch }</span>
        <span className="mx-2">方向: { position.heading }</span>
      </div>
    </div>
  )
}

export default function() {
  const lnglat = { lng: 104.341738, lat: 30.593555, pitch: -10, heading: 280, height: 1000 }
  const [position, setPosition] = useState({...lnglat})
  const mapRef: any = useRef()
  const divGraphicRef: any = useRef()
  let viewer: Viewer
  const initMap = () => {
    viewer = new Viewer(mapRef.current, {
      ...cesiumOption,
      terrainProvider: createWorldTerrain()
    })
    ;(viewer.cesiumWidget.creditContainer as any).style.display = 'none' // 隐藏logo版权
    viewer.scene.globe.depthTestAgainstTerrain = true
    viewer.scene.debugShowFramesPerSecond = true // 显示帧率
    flyTo()
  }
  const flyTo = () => {
    const { lng, lat, pitch, heading, height } = lnglat
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(lng, lat, height),
      orientation: {
        heading: CMath.toRadians(heading),
        pitch: CMath.toRadians(pitch)
      }
    })
  }
  // 获取实时坐标
  const movePosition = () => {
    const handler: ScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.scene.canvas)
    handler.setInputAction(function(movement: any) {
      const ellipsoid = viewer.scene.globe.ellipsoid
      const cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid)
      if (cartesian) {
        const cartographic = ellipsoid.cartesianToCartographic(cartesian)
        const lng = +CMath.toDegrees(cartographic.longitude).toFixed(6)
        const lat = +CMath.toDegrees(cartographic.latitude).toFixed(6)
        const height = +CMath.toDegrees(viewer.camera.positionCartographic.height / 1000).toFixed(2)
        const pitch = +CMath.toDegrees(viewer.camera.pitch).toFixed(2)
        const heading = +CMath.toDegrees(viewer.camera.heading).toFixed(2)
        setPosition({ lng, lat, pitch, heading, height })
      }
    }, ScreenSpaceEventType.MOUSE_MOVE)
  }
  // 画面
  const draw = (type: 'polygon') => {
    if (type === 'polygon') {
      viewer.entities.add({
        polygon: {
          hierarchy: Cartesian3.fromDegreesArray([
            104.315891, 30.590263,
            104.318324, 30.598635,
            104.341738, 30.594555,
            104.338128, 30.586013
          ]) as any,
          material: Color.GREEN.withAlpha(0.4)
        }
      })
    }
  }
  // 加载道路
  const loadRoad = () => {
    const promise = GeoJsonDataSource.load(roadJSON, {
      clampToGround: true
    })
    promise.then((datasource) => {
      viewer.dataSources.add(datasource)
      const entities = datasource.entities.values
      entities.forEach((entity: any) => {
        entity.polygon.extrudedHeight = Math.round(Math.random() * 800) + 400
        entity.polygon.outline = false
        entity.polygon.material = new ImageMaterialProperty({
          image: '/house.jpg'
        })
      })
    })
  }
  const addPopup = async () => {
    const url = await domtoimage.toPng(divGraphicRef.current)
    const position = Cartesian3.fromDegrees(104.3298962, 30.592858)
    const point = {
      name: "点",
      position,
      point: {
        show: true,
        color: Color.RED,
        pixelSize: 4,
        heightReference: HeightReference.CLAMP_TO_GROUND
      }
    }
    const graphic = {
      position,
      billboard: {
        image: url,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        distanceDisplayCondition: new DistanceDisplayCondition(0, 60000)
      }
    }
    viewer.entities.add(point)
    viewer.entities.add(graphic)
  }
  useEffect(() => {
    initMap()
    movePosition()
    draw('polygon')
    loadRoad()
    addPopup()
  }, [])
  return (
    <div className="w-full h-full overflow-hidden relative" ref={mapRef}>
      <div className="absolute -z-10 t-divGraphic" ref={divGraphicRef}>
        <div className="absolute top-1 left-[130px] text-white font-bold text-sm">1号观景点</div>
        <div className="absolute top-8 left-9 w-[140px] h-[120px] text-white text flex flex-col justify-evenly">
          <div>经度: <span className="badge badge-primary badge-sm ml-1">104.325891</span></div>
          <div>纬度: <span className="badge badge-secondary badge-sm ml-1">30.594535</span></div>
          <div>高程: <span className="badge badge-accent badge-sm ml-1 text-white">42.84m</span></div>
        </div>
      </div>
      <Position position={position} />
    </div>
  )
}