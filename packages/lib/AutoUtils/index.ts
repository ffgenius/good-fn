import autolog from 'autolog.js'
/**
 * 计算文件大小
 *
 * @param {number} bytes - 文件大小（字节）。
 * @returns {string} 返回格式化的文件大小字符串。
 */
export function calcFileSize(bytes: number) {
  if (bytes === 0)
    return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`
}
/**
 * 将字节转换为GB
 *
 * @param {number} bytes - 字节数。
 * @returns {number} 返回转换后的GB数。
 */
export function bytes2GB(bytes: number) {
  if (typeof bytes !== 'number')
    return bytes
  return bytes / 1024 / 1024 / 1024
}
/**
 * 将GB转换为字节
 *
 * @param {number} GB - GB数。
 * @returns {number} 返回转换后的字节数。
 */
export function GB2Bytes(GB: number) {
  return GB * 1024 * 1024 * 1024
}
/**
 * 复制文本到剪贴板
 *
 * @param {string} [text] - 要复制的文本。
 * @param {boolean} [tip] - 是否显示复制成功提示。
 */
export function copyInnerText(text?: string, tip: boolean = true) {
  if (!text)
    return
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  tip && autolog.log('复制成功', 'success')
}
/**
 * 将字符串部分字符转换为星号
 *
 * @param {string} [str] - 要转换的字符串。
 * @param {number} [start] - 开始保留的字符数。
 * @param {number} [end] - 结束保留的字符数。
 * @returns {string} 返回转换后的字符串。
 */
export function str2Asterisk(str?: string, start: number = 3, end: number = 4) {
  if (!str)
    return ''
  const len = str.length
  if (len > 12)
    return `${str.substring(0, start)}****${str.substring(len - end)}`
  let result = str
  try {
    result = str.substring(0, start) + '*'.repeat(len - start - end) + str.substring(len - end)
  }
  catch (e) {
    console.error(e)
  }
  return result
}
/**
 * 获取不含参数的URL
 *
 * @param {string} [url] - 完整的URL。
 * @returns {string} 返回不含参数的URL。
 */
export function getUrlWithouParams(url?: string) {
  if (!url)
    return ''
  return url.split('?')[0]
}
/**
 * 生成UUID
 *
 * @returns {string} 返回生成的UUID。
 */
export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
/**
 * 将秒数转换为时间字符串。
 *
 * @param {number} second - 要转换的秒数。
 * @returns {string} 返回格式化的时间字符串。
 *
 * @example
 * ```typescript
 * second2Time(3661); // 返回 "1 时 1 分 1 秒"
 * ```
 */
export function second2Time(second: number) {
  if (second <= 0)
    return '0 秒'
  const day = Math.floor(second / (24 * 3600))
  const hour = Math.floor((second % (24 * 3600)) / 3600)
  const minute = Math.floor((second % 3600) / 60)
  const sec = second % 60
  let result = ''
  if (day)
    result += `${day} 天 `
  if (hour)
    result += `${hour} 时 `
  if (minute)
    result += `${minute} 分 `
  if (sec)
    result += `${sec} 秒 `
  return result
}
