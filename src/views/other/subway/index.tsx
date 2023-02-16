import { useRef, useEffect } from 'react'
import lineRong from './line-rong'
import line2 from './line2'
import line3 from './line3'
import line4 from './line4'
import line5 from './line5'
import line6 from './line6'
import line7 from './line7'
import walk from './walk'
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
      }
    })
    const data = {
      nodes: [...lineRong.nodes, ...line2.nodes, ...line3.nodes, ...line4.nodes, ...line5.nodes, ...line6.nodes, ...line7.nodes],
      edges: [...lineRong.edges, ...line2.edges, ...line3.edges, ...line4.edges, ...line5.edges, ...line6.edges, ...line7.edges, ...walk.edges]
    }
    graph.data(data)
    graph.render()
  }, [])
  return (
    <div className="bg-white dark:bg-gray-900 w-full h-full rounded overflow-scroll">
      <div className="h-full" ref={subwayRef} style={{ zoom: 0.88 }}></div>
    </div>
  )
}