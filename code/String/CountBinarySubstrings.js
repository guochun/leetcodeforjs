/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings_test = function(s) {
    let count = 0
    const match = (str) => {
      const o = str.match(/(^0+|1+)/)[0]
      const r = (o[0]^1).toString().repeat(o.length)
      const reg = new RegExp(`${o}${r}`)
      if(reg.test(str)) return true
      return false
    }
    for (let i = 0, len = s.length; i < len - 1; i ++) {
      const res = match(s.slice(i))
      if(res) count++
    }
    return count
};


var countBinarySubstrings = function(s) {
  let count = 0
  const match = (str) => {
    const o = str.match(/(^0+|1+)/)[0]
    const r = (o[0]^1)
    const start = o.length
    let end = o.length*2
    end = end < str.length ? end : str.length
    const res = str.substring(start, end)
    if(res.length != o.length) return false
    return res.split('').every((v) =>v == r)
  }
  for (let i = 0, len = s.length; i < len - 1; i ++) {
    const res = match(s.slice(i))
    if(res) count++
  }
  return count
};

export default countBinarySubstrings