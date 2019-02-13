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


export default reverseWords