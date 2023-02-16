const color = '#e5026c'

const data = {
  nodes: [
    {
      id: "node3-1",
      label: "2",
      x: 1834,
      y: 74,
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
      id: "node3-2",
      label: "成都医学院",
      x: 1778,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-3",
      label: "石油大学",
      x: 1719,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-4",
      label: "钟楼",
      x: 1661,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-5",
      label: "马超西路",
      x: 1603,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-6",
      label: "团结新区",
      x: 1545,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-7",
      label: "锦水河",
      x: 1486,
      y: 74,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node3-8",
      label: "三河场",
      x: 1412,
      y: 117,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-9",
      label: "金华寺东路",
      x: 1366,
      y: 162,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-10",
      label: "植物园",
      x: 1322,
      y: 207,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-11",
      label: "军区总医院",
      x: 1276,
      y: 252,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-12",
      label: "熊猫大道",
      x: 1233,
      y: 297,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-13",
      label: "动物园",
      x: 1187,
      y: 341,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-14",
      label: "昭觉寺南路",
      x: 1142,
      y: 385,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node3-15",
      label: "驷马桥",
      x: 1078,
      y: 445,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    }
  ],
  edges: [
    { source: 'node3-1', target: 'node3-2', style: { stroke: color } },
    { source: 'node3-2', target: 'node3-3', style: { stroke: color } },
    { source: 'node3-3', target: 'node3-4', style: { stroke: color } },
    { source: 'node3-4', target: 'node3-5', style: { stroke: color } },
    { source: 'node3-5', target: 'node3-6', style: { stroke: color } },
    { source: 'node3-6', target: 'node3-7', style: { stroke: color } },
    { source: 'node3-7', target: 'node3-8', style: { stroke: color } },
    { source: 'node3-8', target: 'node3-9', style: { stroke: color } },
    { source: 'node3-9', target: 'node3-10', style: { stroke: color } },
    { source: 'node3-10', target: 'node3-11', style: { stroke: color } },
    { source: 'node3-11', target: 'node3-12', style: { stroke: color } },
    { source: 'node3-12', target: 'node3-13', style: { stroke: color } },
    { source: 'node3-13', target: 'node3-14', style: { stroke: color } },
    { source: 'node3-14', target: 'node3-15', style: { stroke: color } },
  ]
}

export default data