const MapTxt: string = `import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Basketball from '../../../../assets/basketball.jpg'

let textureLoader: any
let scene: any
let renderer = new THREE.WebGLRenderer()
let camera: any
let ball: any
let step: number = 0

export default function ({ theme }: any) {
  const domRef: any = useRef()
  useEffect(() => {
    const dom = domRef.current
    textureLoader = new THREE.TextureLoader()
    scene = new THREE.Scene()
    renderer.shadowMap.enabled = true
    renderer.setSize(dom.offsetWidth - 20, dom.offsetHeight - 20)
    renderer.setClearColor(0xFFFFFF)
    domRef.current.appendChild(renderer.domElement)
    camera = new THREE.PerspectiveCamera(
      75,
      (dom.offsetWidth - 20) / (dom.offsetHeight - 20),
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
    <div
      className="dark:bg-gray-700 w-[400px] h-[400px] p-[10px] bg-[#3f8cff] rounded-lg overflow-hidden"
      ref={domRef}>
    </div>
  )
}
`

const GirlTxt: string = `import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let renderer: any = new THREE.WebGLRenderer()
let Luka: any
let scene: any
let loader: any
let light: any
let camera: any
let sword: any

export default function({ theme }: any) {
  const domRef: any = useRef()
  const animate = () => {
    requestAnimationFrame( animate )
    if (sword) {
      sword.rotation.y += 0.01;
    }
    renderer.render( scene, camera )
  }
  useEffect(() => {
    const dom: any = domRef.current
    Luka = new URL('../../../../assets/model/luka.glb', import.meta.url)
    scene = new THREE.Scene()
    loader = new GLTFLoader()
    light = new THREE.AmbientLight(0xffffff)
    scene.add(light)
    renderer.setSize(dom.offsetWidth - 20, dom.offsetHeight - 20)
    domRef.current.appendChild(renderer.domElement)
    loader.load(Luka.href, (glb: any) => {
      sword = glb.scene
      scene.add(sword)
      sword.scale.set(0.2, 0.2, 0.2)
      sword.position.set(0, -2, 0)
    })
    camera = new THREE.PerspectiveCamera(
      75,
      (dom.offsetWidth - 20) / (dom.offsetHeight - 20),
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
  return <div className="dark:bg-gray-700 w-[400px] h-[400px] p-[10px] bg-[#3f8cff] rounded-lg overflow-hidden" ref={domRef}></div>
}`

export {
  MapTxt,
  GirlTxt
}