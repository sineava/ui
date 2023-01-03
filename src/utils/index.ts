/**
 * @desc 驼峰转连字符
 */
export function convertCamelToHyphen(str: string) {
  return typeof str === 'string' ? str.replace(/([A-Z])/g, '-$1').toLowerCase() : ''
}

/**
 * @desc 根据json数据下载json文件
 */
export function downloadJsonObj(obj: Object, fileName: string) {
  if (!obj) return
  const dataStr = 'data:text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(obj))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', `${fileName}.json`)
  document.body.appendChild(downloadAnchorNode)
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}

/**
 * @desc hexo转rgb
 */
export function hexToRgb(hex: string) {
  return [parseInt('0x' + hex.slice(1, 3)), parseInt('0x' + hex.slice(3, 5)), parseInt('0x' + hex.slice(5, 7))]
}