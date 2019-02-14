import reverseWords from '../../code/String/CountBinarySubstrings'

test('CountBinarySubstrings_test_1: ', () => {
  expect(reverseWords("00110011")).toBe(6)
})

test('CountBinarySubstrings_test_2: ', () => {
  expect(reverseWords("10101")).toBe(4)
})