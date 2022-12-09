import { useRef, useState, useEffect } from 'react'
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


export default ({ html, css }: Type) => Code(Wrapper, { html, css })