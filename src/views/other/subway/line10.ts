const color = '#0849b7'

const data = {
  nodes: [
    {
      id: 'node10-1',
      label: '簇锦',
      x: 609,
      y: 983,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node10-2',
      label: '华兴',
      x: 564,
      y: 1026,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node10-3',
      label: '金花',
      x: 460,
      y: 1134,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node10-4',
      label: '双流机场1航站楼'.split('').join('\n'),
      x: 296,
      y: 1213,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node10-5',
      label: '双流机场2航站楼'.split('').join('\n'),
      x: 203,
      y: 1213,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node10-6',
      label: '双流西站',
      x: 61,
      y: 1213,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node10-7',
      label: '应天寺',
      x: 39,
      y: 1174,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-8',
      label: '黄水',
      x: 39,
      y: 1131,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-9',
      label: '花源',
      x: 39,
      y: 1093,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-10',
      label: '新津站',
      x: 39,
      y: 1051,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-11',
      label: '花桥',
      x: 39,
      y: 1010,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-12',
      label: '五津',
      x: 39,
      y: 968,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-13',
      label: '儒林路',
      x: 39,
      y: 928,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-14',
      label: '刘家碾',
      x: 39,
      y: 887,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-15',
      label: '新平',
      x: 39,
      y: 848,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node10-16',
      label: '10',
      x: 39,
      y: 800,
      size: 30,
      style: { fill: color },
      labelCfg: {
        position: 'center',
        style: {
          fill: '#fff'
        }
      }
    },
  ],
  edges: [
    { source: 'node7-7', target: 'node10-1', style: { stroke: color }},
    { source: 'node10-1', target: 'node10-2', style: { stroke: color }},
    { source: 'node10-2', target: 'node10-3', style: { stroke: color }},
    { source: 'node10-3', target: 'node10-4', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 381, y: 1213 }]},
    { source: 'node10-4', target: 'node10-5', style: { stroke: color }},
    { source: 'node10-5', target: 'node10-6', style: { stroke: color }},
    { source: 'node10-6', target: 'node10-7', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 39, y: 1213 }]},
    { source: 'node10-7', target: 'node10-8', style: { stroke: color }},
    { source: 'node10-8', target: 'node10-9', style: { stroke: color }},
    { source: 'node10-9', target: 'node10-10', style: { stroke: color }},
    { source: 'node10-10', target: 'node10-11', style: { stroke: color }},
    { source: 'node10-11', target: 'node10-12', style: { stroke: color }},
    { source: 'node10-12', target: 'node10-13', style: { stroke: color }},
    { source: 'node10-13', target: 'node10-14', style: { stroke: color }},
    { source: 'node10-14', target: 'node10-15', style: { stroke: color }},
    { source: 'node10-15', target: 'node10-16', style: { stroke: color }},
  ]
}

export default data