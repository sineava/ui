const color = '#6bc8dd'

const data = {
  nodes: [
    {
      id: 'node7-1',
      label: '花照壁',
      x: 730,
      y: 466,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-2',
      label: '茶店子',
      x: 702,
      y: 496,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-3',
      label: '金沙博物馆',
      x: 626,
      y: 602,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node7-4',
      label: '东坡路',
      x: 626,
      y: 706,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node7-5',
      label: '龙爪堰',
      x: 626,
      y: 764,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node7-6',
      label: '武侯大道',
      x: 626,
      y: 820,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node7-7',
      label: '太平园',
      x: 678,
      y: 915,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-8',
      label: '高朋大道',
      x: 743,
      y: 992,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-9',
      label: '神仙树'.split('').join('\n'),
      x: 837,
      y: 992,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-10',
      label: '火车南站',
      x: 931,
      y: 992,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-11',
      label: '三瓦窑',
      x: 989,
      y: 992,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node7-12',
      label: '四川师大',
      x: 1163,
      y: 992,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node7-13',
      label: '狮子山',
      x: 1192,
      y: 963,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-14',
      label: '大观',
      x: 1219,
      y: 936,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-15',
      label: '成都东客站',
      x: 1291,
      y: 893,
      size: [80, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-16',
      label: '迎晖路',
      x: 1288,
      y: 820,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-17',
      label: '槐树店',
      x: 1288,
      y: 752,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-18',
      label: '双店路',
      x: 1288,
      y: 696,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-19',
      label: '崔家店',
      x: 1288,
      y: 641,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-20',
      label: '理工大学',
      x: 1288,
      y: 578,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: 'node7-21',
      label: '二仙桥',
      x: 1244,
      y: 527,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-22',
      label: '八里庄',
      x: 1214,
      y: 498,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-23',
      label: '府青路',
      x: 1181,
      y: 463,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node7-24',
      label: '九里堤'.split('').join('\n'),
      x: 885,
      y: 445,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
  ],
  edges: [
    { source: 'node6-18', target: 'node7-1', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 750, y: 446 }] },
    { source: 'node7-1', target: 'node7-2', style: { stroke: color } },
    { source: 'node7-2', target: 'node2-9', style: { stroke: color } },
    { source: 'node2-9', target: 'node7-3', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 626, y: 577 }] },
    { source: 'node7-3', target: 'node4-15', style: { stroke: color } },
    { source: 'node4-15', target: 'node7-4', style: { stroke: color } },
    { source: 'node7-4', target: 'node7-5', style: { stroke: color } },
    { source: 'node7-5', target: 'node7-6', style: { stroke: color } },
    { source: 'node7-6', target: 'node7-7', style: { stroke: color } },
    { source: 'node7-7', target: 'node7-8', style: { stroke: color } },
    { source: 'node7-8', target: 'node7-9', style: { stroke: color } },
    { source: 'node7-9', target: 'node7-10', style: { stroke: color } },
    { source: 'node7-10', target: 'node7-11', style: { stroke: color } },
    { source: 'node7-11', target: 'node6-31', style: { stroke: color } },
    { source: 'node6-31', target: 'node7-12', style: { stroke: color } },
    { source: 'node7-12', target: 'node7-13', style: { stroke: color } },
    { source: 'node7-13', target: 'node7-14', style: { stroke: color } },
    { source: 'node7-14', target: 'node7-15', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1265, y: 888 }] },
    { source: 'node7-15', target: 'node7-16', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1262, y: 890 }] },
    { source: 'node7-16', target: 'node7-17', style: { stroke: color } },
    { source: 'node7-17', target: 'node7-18', style: { stroke: color } },
    { source: 'node7-18', target: 'node7-19', style: { stroke: color } },
    { source: 'node7-19', target: 'node7-20', style: { stroke: color } },
    { source: 'node7-20', target: 'node7-21', style: { stroke: color } },
    { source: 'node7-21', target: 'node7-22', style: { stroke: color } },
    { source: 'node7-22', target: 'node7-23', style: { stroke: color } },
    { source: 'node7-23', target: 'node3-15', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 1164, y: 445 }] },
    { source: 'node3-15', target: 'node1-4', style: { stroke: color } },
    { source: 'node1-4', target: 'node5-18', style: { stroke: color } },
    { source: 'node5-18', target: 'node7-24', style: { stroke: color } },
    { source: 'node7-24', target: 'node6-18', style: { stroke: color } },
  ]
}

export default data