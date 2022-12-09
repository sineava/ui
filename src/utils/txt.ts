// awesome模块
const awesome = {
  type: {
html:
`import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  const str = 'This is a typing demo. '
  return (
    <div className="dark:bg-gray-800 dark:text-[#fff] w-full h-full
      overflow-hidden grid place-items-center">
      <span className="t-type">
        { str }
      </span>
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`,
css:
`/* 打字机效果,汉字ch要*2,英文不用,最后一个字符停顿太短可以补空格 */
.t-type {
  width: 23ch;
  animation: typing 10s steps(23) infinite, blink .5s step-end infinite alternate;
  border-right: 2px solid;
  font: 200% monospace;
  @apply overflow-hidden whitespace-nowrap rounded-l;
}

@keyframes typing {
  from {
    width: 0%;
  }
}

@keyframes blink {
  50% { border-color: transparent; }
}
`
  },
  earth: {
html:
`export default function() {
  return (
    <div className="w-full h-full overflow-hidden relative flex justify-center items-center">
      <div className="t-earth absolute"></div>
      <div className="t-earth-ball absolute"></div>
      <div className="t-earth-airplane absolute"></div>
    </div>
  )
}`,
css:
`/* 大屏球 */
.t-earth {
  background: url('./assets/earth-bg.png') center/cover no-repeat;
  @apply z-10 w-4/5 h-4/5 opacity-70;
}
.t-earth-ball {
  background: url('./assets/ball-bg.png')  center/cover no-repeat;
  animation: rotate 20s linear infinite;
  @apply w-full h-full opacity-40;
}
.t-earth-airplane {
  background: url('./assets/airplane.png')  center/cover no-repeat;
  animation: rotateOther 20s linear infinite;
  @apply w-[340px] h-[340px];
}`
  },
  infinite: {
html:
`import React from "react"
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}
const tags = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Vue', 'Vite', 'UI/UX', 'SVG', 'Canvas', 'WebRTC']
const random = () => tags.sort(() => 0.5 - Math.random())

function Wrapper() {
  const row: number = 5
  const card = (item: string, i: number) => (
    <div
      key={i}
      className="px-4 py-2 bg-[#334155] mr-4 rounded shadow-lg cursor-pointer flex justify-center items-center"
    >
      <span className="mx-1 text-gray-600 font-bold text-[20px]">#</span>
      <span className="text-gray-200">{ item }</span>
    </div>
  )
  return (
    <>
      <div className="w-full h-full overflow-hidden flex
        justify-center items-center flex-col gap-y-6 relative">
        {
          [...new Array(row)].map((_: null, i: number) => (
            <div
              key={i}
              className="flex"
              style={
                { '--duration': '20s', '--reverse': i % 2 ? 'reverse' : 'normal' } as React.CSSProperties
              }>
              <div className="t-inner">
                { random().map((x: any) => card(x, i)) }
              </div>
            </div>
          ))
        }
        <div className="t-fade"></div>
      </div>
    </>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`,
css:
`/* 无限滚动 */
.t-inner {
  width: fit-content;
  animation: loop var(--duration) linear var(--reverse) infinite;
  @apply flex;
}
.t-inner:hover {
  animation-play-state: paused;
}`
  },
  shower: {
html:
`import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  return (
    <div className="bg-[#000] w-full h-full overflow-hidden">
      <p className="t-shower select-none">
        lorem*1000
      </p>
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`,
css:
`/* 秀儿蔡徐坤 */
.t-shower {
  filter: grayscale(1) invert(1);
  mix-blend-mode: hard-light;
  background-image: url('./assets/shower.gif');
  @apply text-transparent bg-clip-text;
}`
  }
}

// three模块
const three = {
  girl: {
html:
`import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

let Luka: any
let scene: any
let loader: any
let light: any
let camera: any
let sword: any
let renderer: any = new THREE.WebGLRenderer()

function Wrapper({ theme, children }: any) {
  const domRef: any = useRef()
  const animate = () => {
    requestAnimationFrame( animate )
    renderer.render( scene, camera )
  }
  useEffect(() => {
    const dom: any = domRef.current
    if (!dom) return
    Luka = new URL('../../../../assets/model/luka.glb', import.meta.url)
    scene = new THREE.Scene()
    loader = new GLTFLoader()
    light = new THREE.AmbientLight(0xffffff)
    scene.add(light)
    renderer.setSize(dom.offsetWidth, dom.offsetHeight)
    domRef.current.appendChild(renderer.domElement)
    loader.load(Luka.href, (glb: any) => {
      sword = glb.scene
      scene.add(sword)
      sword.rotation.y = 3
      sword.scale.set(0.3, 0.3, 0.3)
      sword.position.set(0, -3, 0)
    })
    camera = new THREE.PerspectiveCamera(
      75,
      dom.offsetWidth / dom.offsetHeight,
      1,
      1000
    )
    camera.position.z = 5
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.update()
    animate()
  }, [])
  useEffect(() => {
    renderer.setClearColor(theme === 'dark' ? '#111827' : '#fff')
  }, [theme])
  return (
    <div className="w-full h-full" ref={domRef}>
      { children }
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`
  },
  ball: {
html:
`import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Basketball from '../../../../assets/basketball.jpg'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

let textureLoader: any
let scene: any
let renderer = new THREE.WebGLRenderer()
let camera: any
let ball: any
let step: number = 0

function Wrapper({ theme, children }: any) {
  console.log(theme)
  const domRef: any = useRef()
  useEffect(() => {
    const dom = domRef.current
    textureLoader = new THREE.TextureLoader()
    scene = new THREE.Scene()
    renderer.shadowMap.enabled = true
    renderer.setSize(dom.offsetWidth, dom.offsetHeight)
    renderer.setClearColor(0xFFFFFF)
    domRef.current.appendChild(renderer.domElement)
    camera = new THREE.PerspectiveCamera(
      75,
      dom.offsetWidth / dom.offsetHeight,
      1,
      1000
    )
    // 面实体
    const sideGeometry = new THREE.PlaneGeometry(30, 30)
    const sideMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    })
    const side = new THREE.Mesh(sideGeometry, sideMat)
    side.receiveShadow = true
    side.rotation.x = Math.PI * -0.5
    scene.add(side)
    // 球体
    const ballGeometry = new THREE.SphereGeometry(4, 50, 50)
    const ballMat = new THREE.MeshStandardMaterial({
      map: textureLoader.load(Basketball),
      // color: 0x0000ff,
      wireframe: false // 是否渲染为线框
    })
    ball = new THREE.Mesh(ballGeometry, ballMat)
    ball.castShadow = true
    ball.position.x = -10
    scene.add(ball)
    // 坐标轴辅助
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)
    // 坐标栅格辅助
    const gridHelper = new THREE.GridHelper(30)
    scene.add(gridHelper)
    // camera.position.z = 10
    camera.position.set(0, 10, 30)
    // 轨道控制器
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.update()
    // 平行光源
    const directionLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionLight.position.set(-30, 50, 0)
    directionLight.castShadow = true
    directionLight.shadow.camera.bottom = -12
    scene.add(directionLight)
    // 平行光源辅助
    const dLightShadowHelper = new THREE.CameraHelper(directionLight.shadow.camera)
    scene.add(dLightShadowHelper)
    animate()
  }, [])
  const animate = () => {
    requestAnimationFrame(animate)
    step += 0.01
    ball.position.y = 10 * Math.abs(Math.sin(step))
    renderer.render(scene, camera)
  }
  useEffect(() => {
    renderer.setClearColor(theme === 'dark' ? '#111827' : '#fff')
  }, [theme])
  return (
    <div className="w-full h-full" ref={domRef}>
      {children}
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`
  }
}

// 图表模块
const chart = {
  waterball: {
html:
`import { useRef, useState, useEffect } from 'react'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  const chartRef: any = useRef()
  const [value] = useState(0.42)
  const [option] = useState({
    series: [{
      type: 'liquidFill',
      radius: '75%',
      center: ['50%', '50%'],
      color: ['#2397f6'],
      data: [value],
      backgroundStyle: {
        borderWidth: 1,
        color: '#ecf6ff'
      },
      label: {
        normal: {
          formatter: (value * 100).toFixed(2) + '%',
          textStyle: {
            fontSize: 41,
            color: "#7AABFA",
          }
        }
      },
      outline: {
        show: false
      }
    }]
  })

  useEffect(() => {
    echarts.init(chartRef.current).setOption(option)
  }, [])
  return <div className="w-full h-full cursor-pointer" ref={chartRef}></div>
}


export default ({ html, css }: Type) => Code(Wrapper, { html, css })`
  },
  map: {
html:
`import { useRef, useEffect } from 'react'
import * as echarts from 'echarts4.2.1'
import china from 'echarts4.2.1/map/json/china.json'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  const chartRef: any = useRef()
  const geoCoordMap: any = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  }
  
  const geo: any = {
    map: 'china',
    label: {
      emphasis: {
        show: true,
        color:'#fff'
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#3779db',
        borderColor: '#195BB9',
        borderWidth: 1
      },
      emphasis: {
        areaColor: '#2B91B7'
      }
    }
  }
  const series: any[] = []
  const color = ['#a6c84c', '#ffa022', '#46bee9']
  const XAData: any = [
    [{ name: '西安' }, { name: '北京', value: 100 }],
    [{ name: '西安' }, { name: '上海', value: 100 }],
    [{ name: '西安' }, { name: '广州', value: 100 }],
    [{ name: '西安' }, { name: '西宁', value: 100 }],
    [{ name: '西安' }, { name: '银川', value: 100 }]
  ]
  const xNData: any = [
    [
      [{ name: '西宁' }, { name: '北京', value: 100 }],
      [{ name: '西宁' }, { name: '上海', value: 100 }],
      [{ name: '西宁' }, { name: '广州', value: 100 }],
      [{ name: '西宁' }, { name: '西安', value: 100 }],
      [{ name: '西宁' }, { name: '银川', value: 100 }]
    ]
  ]
  const YCData: any = [
    [{ name: '银川' }, { name: '北京', value: 100 }],
    [{ name: '银川' }, { name: '广州', value: 100 }],
    [{ name: '银川' }, { name: '上海', value: 100 }],
    [{ name: '银川' }, { name: '西安', value: 100 }],
    [{ name: '银川' }, { name: '西宁', value: 100 }]
  ]
  const planePath: string = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  const convertData = (data: any) => {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i]
      var fromCoord = geoCoordMap[dataItem[0].name]
      var toCoord = geoCoordMap[dataItem[1].name]
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        })
      }
    }
    return res
  }

  useEffect(() => {
    [['西安', XAData], ['西宁', xNData], ['银川', YCData]].forEach(function (item, i) {
      series.push({
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: 'red',   //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      }, {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      }, {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val: any) {
          return val[2] / 8
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item[1].filter((data: any) => data[1].name).map((dataItem: any) => {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          }
        })
      })
    })
  })

  const option = {
    geo,
    tooltip: {
      trigger: 'item',
      formatter: function (params: any, ticket: any, callback: any) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    series
  }

  useEffect(() => {
    echarts.registerMap('china', china)
    echarts.init(chartRef.current).setOption(option)
  }, [])
  return <div className="w-full h-full cursor-pointer" ref={chartRef}></div>
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })`
  }
}

export {
  awesome,
  three,
  chart
}