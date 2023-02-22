const color = '#3e0aa1'

const data = {
  nodes: [
    {
      id: "node1-1",
      label: "1",
      x: 1034,
      y: 285,
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
      id: "node1-2",
      label: "韦家碾",
      x: 1034,
      y: 346,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node1-3",
      label: "升仙湖",
      x: 1034,
      y: 396,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node1-4",
      label: "火车北站",
      x: 985,
      y: 445,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node1-5",
      label: "文殊院",
      x: 985,
      y: 576,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: "node1-6",
      label: "天府广场".split('').join('\n'),
      x: 933,
      y: 704,
      size: [20, 60],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node1-7",
      label: "锦江宾馆",
      x: 933,
      y: 789,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: "node1-8",
      label: "华西坝",
      x: 933,
      y: 813,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: "node1-9",
      label: "省体育馆",
      x: 933,
      y: 848,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
  ],
  edges: [
    { source: 'node1-1', target: 'node1-2', style: { stroke: color } },
    { source: 'node1-2', target: 'node1-3', style: { stroke: color } },
    { source: 'node1-3', target: 'node1-4', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1034, y: 411 }] },
    { source: 'node1-4', target: 'node6-21', style: { stroke: color } },
    { source: 'node6-21', target: 'node1-5', style: { stroke: color } },
    { source: 'node1-5', target: 'node4-20', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 986, y: 591 }] },
    { source: 'node4-20', target: 'node1-6', style: { stroke: color } },
    { source: 'node1-6', target: 'node1-7', style: { stroke: color } },
    { source: 'node1-7', target: 'node1-8', style: { stroke: color } },
    { source: 'node1-8', target: 'node1-9', style: { stroke: color } },
  ]
}

export default data