const color = '#6bc8dd'

const data = {
  nodes: [
    {
      id: "node7-1",
      label: "花照壁",
      x: 730,
      y: 466,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node7-2",
      label: "茶店子",
      x: 702,
      y: 496,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node7-3",
      label: "金沙博物馆",
      x: 626,
      y: 602,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    }
  ],
  edges: [
    { source: 'node6-18', target: 'node7-1', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 750, y: 446 }] },
    { source: 'node7-1', target: 'node7-2', style: { stroke: color } },
    { source: 'node7-2', target: 'node2-9', style: { stroke: color } },
    { source: 'node2-9', target: 'node7-3', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 626, y: 577 }] },
  ]
}

export default data