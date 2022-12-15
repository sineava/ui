import { useRef, useEffect } from 'react'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

(window as any).CESIUM_BASE_URL = '/'
export default function() {
  const mapRef: any = useRef()
  let viewer: Cesium.Viewer
  const initMap = () => {
    viewer = new Cesium.Viewer(mapRef.current, {
      geocoder: false, //搜索框
      homeButton: false, //home按钮
      sceneModePicker: false, //3d/2d 模式切换按钮
      baseLayerPicker: false, //图层选择按钮
      navigationHelpButton: false, //右上角的帮助按钮
      animation: false, //左下角的动画控件的显示
      shouldAnimate: false, //控制模型动画
      timeline: false, //底部的时间轴
      fullscreenButton: false, //右下角的全屏按钮
      selectionIndicator: true, //选择指示器
      infoBox: true, //信息面板
      terrainProvider: Cesium.createWorldTerrain()
    })
    ;(viewer.cesiumWidget.creditContainer as any).style.display = 'none' //隐藏logo版权
    flyTo()
    addGraphics()
  }
  const flyTo = () => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(116.499464, 30.468743, 67446),
      orientation: {
        heading: 0,
        pitch: -45
      }
    })
  }
  const addGraphics = () => {
    const entity = new Cesium.Entity({
      id: `点`,
      name: '点',
      show: true,
      position: Cesium.Cartesian3.fromDegrees(115.253333, 39.26111),
      point: new Cesium.PointGraphics({
        show: true,
        pixelSize: 5,
        heightReference: Cesium.HeightReference.NONE,
        color: new Cesium.Color(255, 255, 0, 1),
        outlineColor: new Cesium.Color(0, 0, 0, 0),
        outlineWidth: 0,
        scaleByDistance: new Cesium.NearFarScalar(0, 1, 5e10, 1),
        translucencyByDistance: new Cesium.NearFarScalar(0, 1, 5e10, 1),
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 4.8e10),
      })
    })
  }
  useEffect(() => {
    initMap()
  }, [])
  return <div className="w-full h-full overflow-hidden" ref={mapRef}></div>
}