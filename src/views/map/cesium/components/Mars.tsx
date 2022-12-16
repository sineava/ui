import { useEffect, useRef } from 'react'
import { mapOptions } from '../../../../utils/map'
import "mars3d/dist/mars3d.css"
import * as mars3d from "mars3d"
import './graphic.css'

interface HtmlType {
  coor: {
    lng: number,
    lat: number
  }
  color: 'blue' | 'green'
  attr: string
}

const generateGraphic = ({coor, color = 'blue', attr}: HtmlType) => {
  return new mars3d.graphic.DivGraphic({
    position: [coor.lng, coor.lat],
    style: {
      html: `<div class='marsTiltPanel marsTiltPanel-theme-${color}'>
        <div class='marsTiltPanel-wrap'>
          <div class='area'>
            <div class='arrow-lt'></div>
            <div class='b-t'></div>
            <div class='b-r'></div>
            <div class='b-b'></div>
            <div class='b-l'></div>
            <div class='arrow-rb'></div>
            <div class='label-wrap'>
              <div class='title'>${attr}</div>
              <div class='label-content'>
                  <div class='data-li'>
                      <div class='data-label'>经度：</div>
                      <div class='data-value'>${coor.lng}</span>
                      </div>
                  </div>
                  <div class='data-li'>
                      <div class='data-label'>纬度：</div>
                      <div class='data-value'>${coor.lat}</span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div class='b-t-l'></div>
          <div class='b-b-r'></div>
        </div>
        <div class='arrow'></div>
      </div>`,
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 200000),
      scaleByDistance: new Cesium.NearFarScalar(1000, 1.0, 200000, 0.2),
      clampToGround: true
    },
    attr: { remark: attr },
    pointerEvents: false
  })
}

export default function() {
  const mapRef: any = useRef()
  let map: any
  let graphicLayer: any
  useEffect(() => {
    map = new mars3d.Map(mapRef.current, mapOptions)

    // 矢量图层对象
    graphicLayer = new mars3d.layer.GraphicLayer()
    map.addLayer(graphicLayer)

    // 初始化矢量图
    initGraphic()
  }, [])

  const initGraphic = () => {
    const graphic1 = generateGraphic({ coor: { lng: 116.228043, lat: 30.882207 }, color: 'blue', attr: '1号勘探点' })
    const graphic2 = generateGraphic({ coor: { lng: 116.258043, lat: 30.922207 }, color: 'green', attr: '2号勘探点' })

    const graphic3 = new mars3d.graphic.CircleEntity({
      position: new mars3d.LngLatPoint(116.308043, 30.922207, 390.3),
      style: {
        radius: 1500.0,
        materialType: mars3d.MaterialType.CircleWave,
        materialOptions: {
          color: new Cesium.CallbackProperty(function () {
            return Cesium.Color.BLUE
          }, false),
          count: 1,
          speed: 20
        },
        clampToGround: true
      },
      hasMoveEdit: false,
      attr: { remark: "示例4" }
    })

    graphicLayer.addGraphic(graphic1)
    graphicLayer.addGraphic(graphic2)
    graphicLayer.addGraphic(graphic3)
  }
  return <div className='w-full h-full relative' ref={mapRef}></div>
}