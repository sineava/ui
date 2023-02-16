const color = '#a74593'

const data = {
  nodes: [
    {
      id: "node5-1",
      label: "5",
      x: 1341,
      y: 73,
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
      id: "node5-2",
      label: "华桂路",
      x: 1280,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-3",
      label: "柏水场",
      x: 1234,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-4",
      label: "廖家湾",
      x: 1185,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-5",
      label: "北部商贸城",
      x: 1135,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-6",
      label: "幸福桥",
      x: 1087,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-7",
      label: "九道堰",
      x: 1039,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-8",
      label: "杜家碾",
      x: 991,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-9",
      label: "大丰",
      x: 944,
      y: 73,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node5-10",
      label: "石犀公园",
      x: 916,
      y: 102,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-11",
      label: "皇花园",
      x: 916,
      y: 135,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-12",
      label: "陆家桥",
      x: 916,
      y: 173,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-13",
      label: "泉水路",
      x: 916,
      y: 207,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-14",
      label: "洞子口",
      x: 916,
      y: 242,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-15",
      label: "福宁路",
      x: 916,
      y: 278,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-16",
      label: "五块石",
      x: 916,
      y: 314,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node5-17",
      label: "赛云台",
      x: 916,
      y: 349,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node5-18',
      label: '北站西二路'.split('').join('\n'),
      x: 916,
      y: 445,
      size: [20, 80],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
  ],
  edges: [
    { source: 'node5-1', target: 'node5-2', style: { stroke: color } },
    { source: 'node5-2', target: 'node5-3', style: { stroke: color } },
    { source: 'node5-3', target: 'node5-4', style: { stroke: color } },
    { source: 'node5-4', target: 'node5-5', style: { stroke: color } },
    { source: 'node5-5', target: 'node5-6', style: { stroke: color } },
    { source: 'node5-6', target: 'node5-7', style: { stroke: color } },
    { source: 'node5-7', target: 'node5-8', style: { stroke: color } },
    { source: 'node5-8', target: 'node5-9', style: { stroke: color } },
    { source: 'node5-9', target: 'node5-10', style: { stroke: color, radius: 4 }, type: 'polyline' },
    { source: 'node5-10', target: 'node5-11', style: { stroke: color } },
    { source: 'node5-11', target: 'node5-12', style: { stroke: color } },
    { source: 'node5-12', target: 'node5-13', style: { stroke: color } },
    { source: 'node5-13', target: 'node5-14', style: { stroke: color } },
    { source: 'node5-14', target: 'node5-15', style: { stroke: color } },
    { source: 'node5-15', target: 'node5-16', style: { stroke: color } },
    { source: 'node5-16', target: 'node5-17', style: { stroke: color } },
    { source: 'node5-17', target: 'node5-18', style: { stroke: color } },
  ]
}

export default data