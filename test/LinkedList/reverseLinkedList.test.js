import reverseLinkedList from '../../code/LinkedList/reverseLinkedList'

test('reverseLinkedList: ', () => {
  const head = generateLinkedList(count)
  expect(reverseLinkedList(head)).toBe(generateLinkedList(head))
})

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateLinkedList (count) {
  let head = new ListNode(0)
  let temp = head
  for(let i = 1; i < count; i ++) {
   const node = new ListNode(i)
   temp.next = node
   temp = node
  }
  return head
}
