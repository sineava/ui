const color = '#3e0aa1'

const data = {
  nodes: [
    {
      id: 'node1-1',
      label: '1',
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
      id: 'node1-2',
      label: '韦家碾',
      x: 1034,
      y: 346,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node1-3',
      label: '升仙湖',
      x: 1034,
      y: 396,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node1-4',
      label: '火车北站',
      x: 985,
      y: 445,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-5',
      label: '文殊院',
      x: 985,
      y: 576,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node1-6',
      label: '天府广场'.split('').join('\n'),
      x: 933,
      y: 704,
      size: [20, 60],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-7',
      label: '锦江宾馆',
      x: 933,
      y: 789,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-8',
      label: '华西坝',
      x: 933,
      y: 813,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-9',
      label: '省体育馆',
      x: 933,
      y: 848,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-10',
      label: '倪家桥',
      x: 933,
      y: 902,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-11',
      label: '桐梓林',
      x: 933,
      y: 948,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-12',
      label: '高新',
      x: 908,
      y: 1090,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-13',
      label: '金融城',
      x: 908,
      y: 1122,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-14',
      label: '锦城广场'.split('').join('\n'),
      x: 1004,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-15',
      label: '世纪城'.split('').join('\n'),
      x: 1070,
      y: 1280,
      size: [20, 90],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-16',
      label: '天府三街'.split('').join('\n'),
      x: 1121,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-17',
      label: '天府五街'.split('').join('\n'),
      x: 1174,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-18',
      label: '华府大道'.split('').join('\n'),
      x: 1226,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-19',
      label: '四河'.split('').join('\n'),
      x: 1278,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-20',
      label: '华阳'.split('').join('\n'),
      x: 1330,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-21',
      label: '海昌路'.split('').join('\n'),
      x: 1379,
      y: 1280,
      size: [20, 90],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-22',
      label: '广福'.split('').join('\n'),
      x: 1432,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-23',
      label: '红石公园'.split('').join('\n'),
      x: 1484,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-24',
      label: '麓湖'.split('').join('\n'),
      x: 1536,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-25',
      label: '武汉路'.split('').join('\n'),
      x: 1588,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-26',
      label: '天府公园'.split('').join('\n'),
      x: 1642,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-27',
      label: '西博城'.split('').join('\n'),
      x: 1700,
      y: 1280,
      size: [20, 90],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node1-28',
      label: '广州路'.split('').join('\n'),
      x: 1753,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-29',
      label: '兴隆湖'.split('').join('\n'),
      x: 1789,
      y: 1280,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node1-30',
      label: '科学城',
      x: 1833,
      y: 1333,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node1-31',
      label: '1',
      x: 1833,
      y: 1402,
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
      id: 'node1-32',
      label: '广都',
      x: 1328,
      y: 1227,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node1-33',
      label: '五根松',
      x: 1435,
      y: 1227,
      style: { fill: color },
      labelCfg: { position: 'top' }
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
    { source: 'node1-9', target: 'node1-10', style: { stroke: color } },
    { source: 'node1-10', target: 'node1-11', style: { stroke: color } },
    { source: 'node1-11', target: 'node7-10', style: { stroke: color } },
    { source: 'node7-10', target: 'node1-12', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 908, y: 1022 }] },
    { source: 'node1-12', target: 'node1-13', style: { stroke: color } },
    { source: 'node1-13', target: 'node1-14', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 908, y: 1278 }] },
    { source: 'node1-14', target: 'node1-15', style: { stroke: color } },
    { source: 'node1-15', target: 'node1-16', style: { stroke: color } },
    { source: 'node1-16', target: 'node1-17', style: { stroke: color } },
    { source: 'node1-17', target: 'node1-18', style: { stroke: color } },
    { source: 'node1-18', target: 'node1-19', style: { stroke: color } },
    { source: 'node1-19', target: 'node1-20', style: { stroke: color } },
    { source: 'node1-20', target: 'node1-21', style: { stroke: color } },
    { source: 'node1-21', target: 'node1-22', style: { stroke: color } },
    { source: 'node1-22', target: 'node1-23', style: { stroke: color } },
    { source: 'node1-23', target: 'node1-24', style: { stroke: color } },
    { source: 'node1-24', target: 'node1-25', style: { stroke: color } },
    { source: 'node1-25', target: 'node1-26', style: { stroke: color } },
    { source: 'node1-26', target: 'node1-27', style: { stroke: color } },
    { source: 'node1-27', target: 'node1-28', style: { stroke: color } },
    { source: 'node1-28', target: 'node1-29', style: { stroke: color } },
    { source: 'node1-29', target: 'node1-30', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1832, y: 1280 }] },
    { source: 'node1-30', target: 'node1-31', style: { stroke: color } },
    { source: 'node1-19', target: 'node1-32', style: { stroke: color } },
    { source: 'node1-32', target: 'node1-33', style: { stroke: color } }
  ]
}

export default data