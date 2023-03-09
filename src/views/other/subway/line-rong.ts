const color = '#7abb30'
const data = {
  nodes: [
    {
      id: 'node1',
      label: '蓉2',
      x: 430,
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
      id: 'node2',
      label: '郫县西站',
      x: 343,
      y: 73,
      style: {
        fill: color
      }
    },
    {
      id: 'node3',
      label: '菠萝滩',
      x: 288,
      y: 73,
      style: {
        fill: color
      }
    },
    {
      id: 'node4',
      label: '梨园路',
      x: 231,
      y: 73,
      style: {
        fill: color
      }
    },
    {
      id: 'node5',
      label: '和兴街',
      x: 177,
      y: 73,
      style: {
        fill: color
      }
    },
    {
      id: 'node6',
      label: '望丛祠',
      x: 122,
      y: 73,
      style: {
        fill: color
      }
    },
    {
      id: 'node7',
      label: '望丛中路',
      x: 40,
      y: 96,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node8',
      label: '何公路',
      x: 40,
      y: 122,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node9',
      label: '晨光',
      x: 40,
      y: 148,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node10',
      label: '花石',
      x: 40,
      y: 174,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node11',
      label: '大禹东路',
      x: 40,
      y: 197,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node12',
      label: '红展东路',
      x: 40,
      y: 224,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node13',
      label: '红旗大道',
      x: 40,
      y: 249,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node14',
      label: '德富大道',
      x: 40,
      y: 275,
      style: {
        fill: color
      },
      labelCfg: {
        position: 'right',
      }
    },
    {
      id: 'node15',
      label: '安泰五路'.split('').join('\n'),
      x: 60,
      y: 301,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node16',
      label: '安泰二路'.split('').join('\n'),
      x: 90,
      y: 301,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node17',
      label: '康强四路'.split('').join('\n'),
      x: 124,
      y: 301,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node18',
      label: '蜀新大道'.split('').join('\n'),
      x: 157,
      y: 301,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node19',
      label: '天源路'.split('').join('\n'),
      x: 190,
      y: 301,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node20',
      label: '天映路',
      x: 260,
      y: 317,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node21',
      label: '安埠',
      x: 260,
      y: 340,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node22',
      label: '天欣路',
      x: 260,
      y: 364,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node23',
      label: '合作路',
      x: 260,
      y: 386,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node24',
      label: '合信路',
      x: 260,
      y: 410,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node25',
      label: '天润路',
      x: 260,
      y: 433,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node26',
      label: '电子科大',
      x: 260,
      y: 455,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node27',
      label: '新达路',
      x: 281,
      y: 474,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node28',
      label: '锦城学院',
      x: 301,
      y: 494,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node29',
      label: '新业路',
      x: 320,
      y: 517,
      size: [50, 20],
      style: { fill: '#1abc9c', radius: 10 },
      type: 'rect',
      labelCfg: { position: 'center' }
    },
    {
      
      id: 'node30',
      label: '土龙路',
      x: 342,
      y: 536,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node31',
      label: '两河路',
      x: 362,
      y: 556,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node32',
      label: '清醇',
      x: 381,
      y: 577,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node33',
      label: '联工',
      x: 401,
      y: 596,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node34',
      label: '成都西站',
      x: 421,
      y: 615,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node35',
      label: '百叶路',
      x: 350,
      y: 412,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node36',
      label: '晨风',
      x: 386,
      y: 373,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node37',
      label: '天河路',
      x: 420,
      y: 335,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node38',
      label: '犀安路',
      x: 495,
      y: 265,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node39',
      label: '龙吟',
      x: 535,
      y: 221,
      style: { fill: color },
      labelCfg: { position: 'right' }
    },
    {
      id: 'node40',
      label: '交大犀浦校区',
      x: 590,
      y: 164,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node41',
      label: '犀方路',
      x: 617,
      y: 139,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node42',
      label: '国宁',
      x: 641,
      y: 112,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node43',
      label: '大田',
      x: 668,
      y: 87,
      style: { fill: color },
      labelCfg: { position: 'left' }
    },
    {
      id: 'node44',
      label: '西华大学'.split('').join('\n'),
      x: 694,
      y: 71,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node45',
      label: '双林村'.split('').join('\n'),
      x: 727,
      y: 71,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node46',
      label: '金土'.split('').join('\n'),
      x: 759,
      y: 71,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node47',
      label: '技师学院'.split('').join('\n'),
      x: 791,
      y: 71,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node48',
      label: '仁和'.split('').join('\n'),
      x: 824,
      y: 71,
      style: { fill: color },
      labelCfg: { position: 'bottom' }
    },
    {
      id: 'node49',
      label: '蓉2',
      x: 861,
      y: 71,
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
  ],
  edges: [
    { source: 'node1', target: 'node2', style: { stroke: color } },
    { source: 'node2', target: 'node3', style: { stroke: color } },
    { source: 'node3', target: 'node4', style: { stroke: color } },
    { source: 'node4', target: 'node5', style: { stroke: color } },
    { source: 'node5', target: 'node6', style: { stroke: color } },
    { source: 'node6', target: 'node7', style: { stroke: color, radius: 4 }, type: 'polyline' },
    { source: 'node7', target: 'node8', style: { stroke: color } },
    { source: 'node8', target: 'node9', style: { stroke: color } },
    { source: 'node9', target: 'node10', style: { stroke: color } },
    { source: 'node10', target: 'node11', style: { stroke: color } },
    { source: 'node11', target: 'node12', style: { stroke: color } },
    { source: 'node12', target: 'node13', style: { stroke: color } },
    { source: 'node13', target: 'node14', style: { stroke: color } },
    { source: 'node14', target: 'node15', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 40, y: 300 }] },
    { source: 'node15', target: 'node16', style: { stroke: color } },
    { source: 'node16', target: 'node17', style: { stroke: color } },
    { source: 'node17', target: 'node18', style: { stroke: color } },
    { source: 'node18', target: 'node19', style: { stroke: color } },
    { source: 'node19', target: 'node20', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 259, y: 300 }] },
    { source: 'node20', target: 'node21', style: { stroke: color } },
    { source: 'node21', target: 'node22', style: { stroke: color } },
    { source: 'node22', target: 'node23', style: { stroke: color } },
    { source: 'node23', target: 'node24', style: { stroke: color } },
    { source: 'node24', target: 'node25', style: { stroke: color } },
    { source: 'node25', target: 'node26', style: { stroke: color } },
    { source: 'node26', target: 'node27', style: { stroke: color } },
    { source: 'node27', target: 'node28', style: { stroke: color } },
    { source: 'node28', target: 'node29', style: { stroke: color } },
    { source: 'node29', target: 'node30', style: { stroke: color } },
    { source: 'node30', target: 'node31', style: { stroke: color } },
    { source: 'node31', target: 'node32', style: { stroke: color } },
    { source: 'node32', target: 'node33', style: { stroke: color } },
    { source: 'node33', target: 'node34', style: { stroke: color } },
    { source: 'node29', target: 'node35', style: { stroke: color, radius: 4 }, type: 'polyline' },
    { source: 'node35', target: 'node36', style: { stroke: color } },
    { source: 'node36', target: 'node37', style: { stroke: color } },
    { source: 'node37', target: 'node38', style: { stroke: color } },
    { source: 'node38', target: 'node39', style: { stroke: color } },
    { source: 'node39', target: 'node40', style: { stroke: color } },
    { source: 'node40', target: 'node41', style: { stroke: color } },
    { source: 'node41', target: 'node42', style: { stroke: color } },
    { source: 'node42', target: 'node43', style: { stroke: color } },
    { source: 'node43', target: 'node44', style: { stroke: color, radius: 4 }, type: 'polyline', controlPoints: [{ x: 682, y: 70 }] },
    { source: 'node44', target: 'node45', style: { stroke: color } },
    { source: 'node45', target: 'node46', style: { stroke: color } },
    { source: 'node46', target: 'node47', style: { stroke: color } },
    { source: 'node47', target: 'node48', style: { stroke: color } },
    { source: 'node48', target: 'node49', style: { stroke: color } }
  ]
}

export default data