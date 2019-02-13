function reverseWords(s) {
  let res = ''
  let word = ''
  for(let c of s) {
    if (c === ' ') {
      res += word + c
      word = ''
    } else {
      word = c + word
    }
  }
  return res + word
}

function reverseWords_test(s) {
  return s.split(' ').map((v) => {
    return v.split('').reverse().join('')
  }).join(' ')
}

function reverseWords_test1(s) {
  return s.split(/\s/g).map((v) => {
    return v.split('').reverse().join('')
  }).join(' ')
}

function reverseWords_test2(s) {
  //判断空字符和所有字符都为空白字符
  if(/^\s*$/.test(s)) return s
  return s.match(/\S+/g).map((v) => {
    return v.split('').reverse().join('')
  }).join(' ')
}

export default reverseWords