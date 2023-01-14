import { useEffect, useRef } from 'react'
import { createApp } from 'vue'
import App from './index.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default () => {
  const containerRef: any = useRef(null)
  useEffect(() => {
    const app = createApp(App)
    app.use(ElementPlus, {
      locale: zhCn
    })
    app.mount(containerRef.current)
  }, [])
  return <div className="w-full h-full" ref={containerRef}></div>
}