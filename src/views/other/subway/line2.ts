const color = '#fc6139'

const data = {
  nodes: [
    {
      id: "node2-1",
      label: "2",
      x: 322,
      y: 184,
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
      id: "node2-2",
      label: "天河路",
      x: 477,
      y: 335,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node2-3",
      label: "百草路",
      x: 504,
      y: 365,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-4",
      label: "金周路",
      x: 530,
      y: 392,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-5",
      label: "金科北路",
      x: 556,
      y: 419,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-6",
      label: "迎宾大道",
      x: 584,
      y: 447,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-7",
      label: "茶店子客运站",
      x: 610,
      y: 475,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-8",
      label: "羊犀立交",
      x: 637,
      y: 501,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node2-9',
      label: '一品天下',
      x: 668,
      y: 531,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node2-10",
      label: "蜀汉路东",
      x: 704,
      y: 569,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-11",
      label: "白果林",
      x: 736,
      y: 603,
      style: {
        fill: color
      },
      labelCfg: { position: 'left' }
    },
    {
      id: "node2-12",
      label: "中医大省医院",
      x: 782,
      y: 652,
      size: [80, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
  ],
  edges: [
    { source: 'node2-1', target: 'node6-9', style: { stroke: color } }, // 犀浦换乘站
    { source: 'node6-9', target: 'node2-2', style: { stroke: color } },
    { source: 'node2-2', target: 'node2-3', style: { stroke: color } },
    { source: 'node2-3', target: 'node2-4', style: { stroke: color } },
    { source: 'node2-4', target: 'node2-5', style: { stroke: color } },
    { source: 'node2-5', target: 'node2-6', style: { stroke: color } },
    { source: 'node2-6', target: 'node2-7', style: { stroke: color } },
    { source: 'node2-7', target: 'node2-8', style: { stroke: color } },
    { source: 'node2-8', target: 'node2-9', style: { stroke: color } },
    { source: 'node2-9', target: 'node2-10', style: { stroke: color } },
    { source: 'node2-10', target: 'node2-11', style: { stroke: color } },
    { source: 'node2-11', target: 'node2-12', style: { stroke: color } },
  ]
}

export default data