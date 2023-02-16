const color = '#ba7324'

const data = {
  nodes: [
    {
      id: "node6-1",
      label: "6",
      x: 123,
      y: 123,
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
      id: "node6-2",
      label: "和平街",
      x: 123,
      y: 171,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-3",
      label: "郫筒",
      x: 123,
      y: 215,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-4",
      label: "蜀新大道",
      x: 165,
      y: 261,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node6-5",
      label: "柠梓",
      x: 209,
      y: 261,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node6-6",
      label: "尚锦路",
      x: 252,
      y: 261,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node6-7",
      label: "红高路",
      x: 296,
      y: 261,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: "node6-8",
      label: "天宇路",
      x: 339,
      y: 261,
      style: {
        fill: color
      },
      labelCfg: { position: 'top' }
    },
    {
      id: 'node6-9',
      label: '犀\n浦',
      x: 398,
      y: 261,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node6-10",
      label: "新业北街",
      x: 434,
      y: 229,
      style: {
        fill: color
      },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node6-11",
      label: "梓潼宫",
      x: 611,
      y: 222,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-12",
      label: "侯家桥",
      x: 644,
      y: 256,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-13",
      label: "兴盛",
      x: 676,
      y: 288,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-14",
      label: "青杠",
      x: 709,
      y: 322,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-15",
      label: "西华大道",
      x: 741,
      y: 355,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-16",
      label: "金府",
      x: 774,
      y: 387,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: "node6-17",
      label: "星河",
      x: 805,
      y: 420,
      style: {
        fill: color
      },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node6-18',
      label: '西南交大',
      x: 826,
      y: 443,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
  ],
  edges: [
    { source: 'node6-1', target: 'node6-2', style: { stroke: color } },
    { source: 'node6-2', target: 'node6-3', style: { stroke: color } },
    { source: 'node6-3', target: 'node6-4', style: { stroke: color } },
    { source: 'node6-4', target: 'node6-5', style: { stroke: color } },
    { source: 'node6-5', target: 'node6-6', style: { stroke: color } },
    { source: 'node6-6', target: 'node6-7', style: { stroke: color } },
    { source: 'node6-7', target: 'node6-8', style: { stroke: color } },
    { source: 'node6-8', target: 'node6-9', style: { stroke: color } },
    { source: 'node6-9', target: 'node6-10', style: { stroke: color } },
    { source: 'node6-10', target: 'node6-11', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 476, y: 185 }, { x: 573, y: 185 }] },
    { source: 'node6-11', target: 'node6-12', style: { stroke: color } },
    { source: 'node6-12', target: 'node6-13', style: { stroke: color } },
    { source: 'node6-13', target: 'node6-14', style: { stroke: color } },
    { source: 'node6-14', target: 'node6-15', style: { stroke: color } },
    { source: 'node6-15', target: 'node6-16', style: { stroke: color } },
    { source: 'node6-16', target: 'node6-17', style: { stroke: color } },
    { source: 'node6-17', target: 'node6-18', style: { stroke: color } },
  ]
}

export default data