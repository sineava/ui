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
      label: "凤\n溪\n河",
      x: 114,
      y: 652,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node4-5",
      label: "南熏大道".split('').join('\n'),
      x: 150,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-6",
      label: "光华公园".split('').join('\n'),
      x: 185,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-7",
      label: "涌泉".split('').join('\n'),
      x: 220,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-8",
      label: "凤凰大街".split('').join('\n'),
      x: 254,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-9",
      label: "马厂坝".split('').join('\n'),
      x: 288,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-10",
      label: "非遗博览园".split('').join('\n'),
      x: 322,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-11",
      label: "蔡桥".split('').join('\n'),
      x: 357,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-12",
      label: "中坝".split('').join('\n'),
      x: 392,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-13",
      label: "成都西站",
      x: 457,
      y: 652,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node4-14",
      label: "清江西路".split('').join('\n'),
      x: 528,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-15",
      label: "文化宫",
      x: 627,
      y: 652,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node4-16",
      label: "西南财大".split('').join('\n'),
      x: 683,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-17",
      label: "草堂北路".split('').join('\n'),
      x: 704,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-18",
      label: "中医大省医院",
      x: 782,
      y: 652,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node4-19",
      label: "宽窄巷子",
      x: 877,
      y: 652,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node4-20",
      label: "骡马市",
      x: 931,
      y: 652,
      size: [60, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
  ],
  edges: [
    { source: 'node4-1', target: 'node4-2', style: { stroke: color } },
    { source: 'node4-2', target: 'node4-3', style: { stroke: color } },
    { source: 'node4-3', target: 'node4-4', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 40, y: 652 }] },
    { source: 'node4-4', target: 'node4-5', style: { stroke: color } },
    { source: 'node4-5', target: 'node4-6', style: { stroke: color } },
    { source: 'node4-6', target: 'node4-7', style: { stroke: color } },
    { source: 'node4-7', target: 'node4-8', style: { stroke: color } },
    { source: 'node4-8', target: 'node4-9', style: { stroke: color } },
    { source: 'node4-9', target: 'node4-10', style: { stroke: color } },
    { source: 'node4-10', target: 'node4-11', style: { stroke: color } },
    { source: 'node4-11', target: 'node4-12', style: { stroke: color } },
    { source: 'node4-12', target: 'node4-13', style: { stroke: color } },
    { source: 'node4-13', target: 'node4-14', style: { stroke: color } },
    { source: 'node4-14', target: 'node4-15', style: { stroke: color } },
    { source: 'node4-15', target: 'node4-16', style: { stroke: color } },
    { source: 'node4-16', target: 'node4-17', style: { stroke: color } },
    { source: 'node4-17', target: 'node4-18', style: { stroke: color } },
    { source: 'node4-18', target: 'node4-19', style: { stroke: color } },
    { source: 'node4-19', target: 'node4-20', style: { stroke: color } },
  ]
}

export default data