import { useRef, useEffect } from 'react'
import data from './data'
import { Graph } from '@antv/g6'

export default () => {
  const subwayRef = useRef(null)
  useEffect(() => {
    const graph = new Graph({
      container: subwayRef.current,
      linkCenter: true,
      defaultNode: {
        labelCfg: {
          position: 'top',
          offset: 4,
          style: {
            fill: '#fff',
            fontSize: 11
          }
        },
        size: 10,
        style: {
          stroke: 'transparent'
        }
      },
      defaultEdge: {
        style: {
          lineWidth: 4
        }
      },
      // modes: {
      //   default: ['drag-node']
      // }
    })
    graph.data(data)
    graph.render()
  }, [])
  return <div className="bg-white dark:bg-gray-900 w-full h-full rounded" ref={subwayRef}></div>
}