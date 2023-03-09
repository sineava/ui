const color = '#1d6d6d'

const data = {
  nodes: [
    {
      id: 'node18-1',
      label: '天府机场1号\n2号航站楼',
      x: 1842,
      y: 919,
      size: [60, 30],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node18-2',
      label: '18',
      x: 1834,
      y: 808,
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
      id: 'node18-3',
      label: '天府机场\n3号4号航站楼',
      x: 1826,
      y: 987,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node18-4',
      label: '福田',
      x: 1826,
      y: 1046,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node18-5',
      label: '三岔',
      x: 1826,
      y: 1103,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node18-6',
      label: '天府新站',
      x: 1826,
      y: 1162,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node18-7',
      label: '兴隆',
      x: 1826,
      y: 1220,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node18-8',
      label: '锦城广场东'.split('').join('\n'),
      x: 1001,
      y: 1247,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
  ],
  edges: [
    { source: 'node7-10', target: 'node9-7', style: { stroke: color } },
    { source: 'node9-7', target: 'node1-15', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 928, y: 1260 }, { x: 1070, y: 1260 }] },
    { source: 'node1-15', target: 'node1-27', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1070, y: 1260 }, { x: 1698, y: 1260 }] },
    { source: 'node1-27', target: 'node18-1', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1698, y: 1260 }, { x: 1840, y: 1260 }] },
    { source: 'node18-1', target: 'node18-2', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1840, y: 808 }]},
    { source: 'node18-2', target: 'node18-1', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1826, y: 808 }, { x: 1826, y: 917 }]},
    { source: 'node18-1', target: 'node18-3', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1826, y: 917 }]},
    { source: 'node18-3', target: 'node18-4', style: { stroke: color }},
    { source: 'node18-4', target: 'node18-5', style: { stroke: color }},
    { source: 'node18-5', target: 'node18-6', style: { stroke: color }},
    { source: 'node18-6', target: 'node18-7', style: { stroke: color }},
    { source: 'node18-7', target: 'node1-27', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1826, y: 1247 }, { x: 1698, y: 1247 }]},
    { source: 'node1-27', target: 'node1-15', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1698, y: 1247 }, { x: 1070, y: 1247 }]},
    { source: 'node1-15', target: 'node18-8', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1070, y: 1247 }]},
    { source: 'node18-8', target: 'node9-7', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 940, y: 1247 }, { x: 940, y: 1160 }]},
    { source: 'node9-7', target: 'node7-10', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 940, y: 1160 }, { x: 940, y: 994 }]},
  ]
}

export default data