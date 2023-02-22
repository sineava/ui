const color = '#99cc00'

const data = {
  nodes: [
    {
      id: "node8-1",
      label: "8",
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
      id: "node8-2",
      label: "十里店",
      x: 1381,
      y: 485,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: "node8-3",
      label: "东郊记忆",
      x: 1247,
      y: 623,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: "node8-4",
      label: "杉板桥",
      x: 1219,
      y: 651,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: "node8-5",
      label: "万年路",
      x: 1208,
      y: 690,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: "node8-6",
      label: "双桥路".split('').join('\n'),
      x: 1210,
      y: 753,
      size: [20, 50],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node8-7",
      label: "东大路",
      x: 1175,
      y: 865,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      id: "node8-8",
      label: "净居寺",
      x: 1138,
      y: 905,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: "node8-9",
      label: "东湖公园",
      x: 1006,
      y: 935,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: "node8-10",
      label: "川大望江校区".split('').join('\n'),
      x: 979,
      y: 928,
      style: { fill: color },
      labelCfg: { position: 'top' }
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
  ]
}

export default data