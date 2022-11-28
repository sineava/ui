import * as echarts from 'echarts'
import 'echarts-liquidfill'
import { useEffect, useRef } from 'react'

const value = 0.42
const option = {
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
}

console.log(echarts.extendSeriesModel)

export default function() {
  const chartRef: any = useRef()
  useEffect(() => {
    echarts.init(chartRef.current).setOption(option);
  }, [])
  return <div>
    <div className="dark:text-[#fff] py-2 text-[24px] font-semibold">
      水球图
    </div>
    <div className="dark:bg-gray-900 bg-[#fff] hover:bg-[#f9faff] p-2 w-[300px] h-[300px] rounded shadow mt-4">
      <div className="w-full h-full  cursor-pointer" ref={chartRef}></div>
    </div>
  </div>
}