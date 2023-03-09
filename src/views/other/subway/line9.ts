const color = '#eab411'

const data = {
  nodes: [
    {
      id: 'node9-1',
      label: '9',
      x: 457,
      y: 521,
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
      id: 'node9-2',
      label: '黄田坝',
      x: 457,
      y: 602,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node9-3',
      label: '培风',
      x: 457,
      y: 703,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node9-4',
      label: '机投桥',
      x: 457,
      y: 774,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node9-5',
      label: '簇桥',
      x: 515,
      y: 975,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node9-6',
      label: '太平寺',
      x: 605,
      y: 1070,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node9-7',
      label: '孵化园',
      x: 927,
      y: 1159,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node9-8',
      label: '心岛',
      x: 1063,
      y: 1159,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
  ],
  edges: [
    { source: 'node9-1', target: 'node9-2', style: { stroke: color } },
    { source: 'node9-2', target: 'node4-13', style: { stroke: color } },
    { source: 'node4-13', target: 'node9-3', style: { stroke: color } },
    { source: 'node9-3', target: 'node9-4', style: { stroke: color } },
    { source: 'node9-4', target: 'node3-25', style: { stroke: color } },
    { source: 'node3-25', target: 'node9-5', style: { stroke: color } },
    { source: 'node9-5', target: 'node10-2', style: { stroke: color } },
    { source: 'node10-2', target: 'node9-6', style: { stroke: color } },
    { source: 'node9-6', target: 'node8-15', style: { stroke: color } },
    { source: 'node8-15', target: 'node5-30', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 698, y: 1160 }] },
    { source: 'node5-30', target: 'node9-7', style: { stroke: color } },
    { source: 'node9-7', target: 'node9-8', style: { stroke: color } },
    { source: 'node9-8', target: 'node6-34', style: { stroke: color } },
  ]
}

export default data