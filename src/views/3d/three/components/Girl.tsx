import { useEffect, useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

let renderer: any = new THREE.WebGLRenderer()

function Wrapper({ theme, children }: any) {
  let Luka: any
  let Nilu: any
  let scene: any
  // let loader: any
  let mmdLoader: any
  let light: any
  let camera: any
  const domRef: any = useRef()
  const animate = () => {
    requestAnimationFrame( animate )
    renderer.render( scene, camera )
  }
  useEffect(() => {
    const dom: any = domRef.current
    if (!dom) return
    // Luka = new URL('../../../../assets/model/luka.glb', import.meta.url)
    Nilu = new URL('/zaoyou/tinali.pmx', import.meta.url)
    scene = new THREE.Scene()
    // loader = new GLTFLoader()
    mmdLoader = new MMDLoader()
    light = new THREE.AmbientLight(0xffffff)
    scene.add(light)
    renderer.setSize(dom.offsetWidth, dom.offsetHeight)
    domRef.current.appendChild(renderer.domElement)
    // loader.load(Luka.href, (glb: any) => {
    //   const sword = glb.scene
    //   scene.add(sword)
    //   sword.rotation.y = 3
    //   sword.scale.set(0.3, 0.3, 0.3)
    //   sword.position.set(0, -3, 0)
    // })
    mmdLoader.load(Nilu.href, (mesh: any) => {
      scene.add(mesh)
      mesh.position.y = -4
      mesh.position.z = -2
      mesh.scale.set(0.4, 0.4, 0.4)
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
    const color = theme === 'dark' ? '#111827' : '#fff'
    console.log(color)
    renderer.setClearColor(color)
  }, [theme])
  return (
    <div className="w-full h-full" ref={domRef}>
      { children }
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })