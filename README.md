## 待办功能
- [ ] border改为配置项
- [ ] 头像可配置
- [ ] 图片加水印
- [ ] 更换logo
- [ ] 电池兼容ipad
- [ ] 增加uniapp模块
- [ ] 更换路径alias
- [ ] lottie组件图标复制改为下载
- [ ] 视频逐帧绿幕
- [ ] cesium按需加载

## 待修复
- [] cesium文件问题

## 已完成功能
- [x] 打字机效果
- [x] code模板抽离
- [x] github登录集成
- [x] 添加无限视差滚动
- [x] svg文字渐变动画
- [x] cesium地图

## 源码修改
### antd
- lib/theme/themes/dark/index.js
```js
// 修改前
return Object.assign(Object.assign(Object.assign({}, mergedMapToken), colorPalettes), genColorMapToken(token, {
  generateColorPalettes,
  generateNeutralColorPalettes
}))
// => 修改后(适配当前暗黑模式)
const obj = Object.assign(Object.assign(Object.assign({}, mergedMapToken), colorPalettes), genColorMapToken(token, {
  generateColorPalettes,
  generateNeutralColorPalettes
}))
return {
  ...obj,
  colorBgElevated: '#111827',
  colorBgContainer: '#111827'
}
```