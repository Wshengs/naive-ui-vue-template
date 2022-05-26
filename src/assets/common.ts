/**
 * 防抖函数
 * @param {Function} fn 延迟毫秒取消后执行的函数
 * @param {Number} wait 等待时间，默认500ms
 * @return {Function} 返回一个待执行函数
 */
export const debounce = (fn: (...args: any[]) => Promise<any>, wait: number = 500): Function => {
    let timeout: number | null = null
    return function (...args: any[]) {
        if (timeout !== null) clearTimeout(timeout)
        return new Promise((resolve) => {
            timeout = setTimeout(() => {
                timeout = null
                resolve(fn(...args))
            }, wait)
        })
    }
}

/**
 * 生成随机位数的Id
 * @param {Number} len 生成位数
 * @return {String} 返回随机生成的len位数的字符串
 */
export function getId(len: number): string {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        })
        .substring(0, len)
}
