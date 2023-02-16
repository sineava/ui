const color = '#04ae61'

const data = {
  nodes: [
    {
      id: "node4-1",
      label: "4",
      x: 40,
      y: 421,
      size: 30,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'center',
        style: {
          fill: '#fff'
        }
      }
    },
    {
      id: "node4-2",
      label: "万盛",
      x: 40,
      y: 511,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node4-3",
      label: "杨柳河",
      x: 40,
      y: 582,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node4-4",
      label: "凤\n西\n河",
      x: 114,
      y: 652,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    }
  ],
  edges: [
    { source: 'node4-1', target: 'node4-2', style: { stroke: color } },
    { source: 'node4-2', target: 'node4-3', style: { stroke: color } },
    { source: 'node4-3', target: 'node4-4', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 40, y: 652 }] },
  ]
}

export default data