/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings_test = function (s) {
  let count = 0
  const match = (str) => {
    const o = str.match(/(^0+|1+)/)[0]
    const r = (o[0] ^ 1)
    const start = o.length
    let end = o.length * 2
    end = end < str.length ? end : str.length
    const res = str.substring(start, end)
    if (res.length != o.length) return false
    return res.split('').every((v) => v == r)
  }
  for (let i = 0, len = s.length; i < len - 1; i++) {
    const res = match(s.slice(i))
    if (res) count++
  }
  return count
};


var countBinarySubstrings = function (s) {
  return s.replace(/10/g, '1,0').replace(/01/g, '0,1').split(',').reduce((res, a, i, arr) => {
    return i ? res + Math.min(a.length,arr[i--].length ) : 0
  }, 0)
};

export default countBinarySubstrings