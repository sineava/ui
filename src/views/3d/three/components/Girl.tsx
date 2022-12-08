import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let Luka: any
let scene: any
let loader: any
let light: any
let camera: any
let sword: any
let renderer: any = new THREE.WebGLRenderer()

export default function({ theme, children }: any) {
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
    renderer.setSize(dom.offsetWidth - 8, dom.offsetHeight - 8)
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
      (dom.offsetWidth - 8) / (dom.offsetHeight - 8),
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
    <div className="t-card" ref={domRef}>
      { children }
    </div>
  )
}

