import { useEffect, useRef } from "react"
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
}