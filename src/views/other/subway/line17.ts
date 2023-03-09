const color = '#88e6ad'

const data = {
  nodes: [
    {
      id: 'node17-1',
      label: '17',
      x: 116,
      y: 424,
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
      id: 'node17-2',
      label: '金星',
      x: 115,
      y: 484,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node17-3',
      label: '黄石',
      x: 115,
      y: 520,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node17-4',
      label: '市五医院',
      x: 115,
      y: 557,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node17-5',
      label: '温泉大道'.split('').join('\n'),
      x: 151,
      y: 772,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node17-6',
      label: '明光'.split('').join('\n'),
      x: 218,
      y: 772,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node17-7',
      label: '九江北'.split('').join('\n'),
      x: 282,
      y: 772,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node17-8',
      label: '白佛桥'.split('').join('\n'),
      x: 351,
      y: 772,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
  ],
  edges: [
    { source: 'node17-1', target: 'node17-2', style: { stroke: color } },
    { source: 'node17-2', target: 'node17-3', style: { stroke: color } },
    { source: 'node17-3', target: 'node17-4', style: { stroke: color } },
    { source: 'node17-4', target: 'node4-4', style: { stroke: color } },
    { source: 'node4-4', target: 'node17-5', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 114, y: 772 }] },
    { source: 'node17-5', target: 'node17-6', style: { stroke: color } },
    { source: 'node17-6', target: 'node17-7', style: { stroke: color } },
    { source: 'node17-7', target: 'node9-4', style: { stroke: color } },
  ]
}

export default data