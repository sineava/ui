const color = '#99cc00'

const data = {
  nodes: [
    {
      id: 'node8-1',
      label: '8',
      x: 1466,
      y: 401,
      size: 30,
      style: { fill: color },
      labelCfg: {
        position: 'center',
        style: {
          fill: '#fff'
        }
      }
    },
    {
      id: 'node8-2',
      label: '十里店',
      x: 1381,
      y: 485,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node8-3',
      label: '东郊记忆',
      x: 1247,
      y: 623,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-4',
      label: '杉板桥',
      x: 1219,
      y: 651,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node8-5',
      label: '万年路',
      x: 1208,
      y: 690,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node8-6',
      label: '双桥路'.split('').join('\n'),
      x: 1210,
      y: 753,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node8-7',
      label: '东大路',
      x: 1175,
      y: 865,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node8-8',
      label: '净居寺',
      x: 1138,
      y: 905,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node8-9',
      label: '东湖公园',
      x: 1006,
      y: 935,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node8-10',
      label: '川大望江校区'.split('').join('\n'),
      x: 979,
      y: 928,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node8-11',
      label: '芳草街',
      x: 856,
      y: 904,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node8-12',
      label: '永丰',
      x: 821,
      y: 904,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node8-13',
      label: '殷家林',
      x: 702,
      y: 1024,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node8-14',
      label: '庆安',
      x: 679,
      y: 1049,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-14',
      label: '石羊',
      x: 656,
      y: 1072,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-15',
      label: '三元',
      x: 632,
      y: 1097,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node8-16',
      label: '顺风',
      x: 561,
      y: 1170,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-17',
      label: '珠江路',
      x: 503,
      y: 1227,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-18',
      label: '川大江安校区',
      x: 446,
      y: 1284,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-19',
      label: '文星',
      x: 391,
      y: 1341,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node8-20',
      label: '莲花',
      x: 295,
      y: 1381,
      style: { fill: color },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node8-21',
      label: '8',
      x: 208,
      y: 1381,
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
    { source: 'node8-1', target: 'node8-2', style: { stroke: color } },
    { source: 'node8-2', target: 'node7-20', style: { stroke: color } },
    { source: 'node7-20', target: 'node8-3', style: { stroke: color } },
    { source: 'node8-3', target: 'node8-4', style: { stroke: color } },
    { source: 'node8-4', target: 'node8-5', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1208, y: 660 }] },
    { source: 'node8-5', target: 'node8-6', style: { stroke: color } },
    { source: 'node8-6', target: 'node8-7', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1210, y: 826 }] },
    { source: 'node8-7', target: 'node8-8', style: { stroke: color } },
    { source: 'node8-8', target: 'node6-30', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1107, y: 935 }] },
    { source: 'node6-30', target: 'node8-9', style: { stroke: color } },
    { source: 'node8-9', target: 'node8-10', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 983, y: 935 }] },
    { source: 'node8-10', target: 'node1-10', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 952, y: 906 }] },
    { source: 'node1-10', target: 'node8-11', style: { stroke: color } },
    { source: 'node8-11', target: 'node8-12', style: { stroke: color } },
    { source: 'node8-12', target: 'node5-25', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 745, y: 981 }] },
    { source: 'node5-25', target: 'node8-13', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 787, y: 935 }] },
    { source: 'node8-13', target: 'node8-14', style: { stroke: color } },
    { source: 'node8-14', target: 'node8-15', style: { stroke: color } },
    { source: 'node8-15', target: 'node8-16', style: { stroke: color } },
    { source: 'node8-16', target: 'node8-17', style: { stroke: color } },
    { source: 'node8-17', target: 'node8-18', style: { stroke: color } },
    { source: 'node8-18', target: 'node8-19', style: { stroke: color } },
    { source: 'node8-19', target: 'node8-20', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 349, y: 1381 }] },
    { source: 'node8-20', target: 'node8-21', style: { stroke: color } },
  ]
}

export default data