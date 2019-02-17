/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = function(head) {
  let new_head = null
  let next = null
  while(head) {
   next = head.next
   head.next = new_head
   new_head = head
   head = next
  }
  return new_head
};

var reverseList_test = function(head) {
  return head ? reverse(head, null) : head;
};

function reverse (node, previous) {
  let newHead = node;

  // recursive call to tail
  if (node.next) newHead = reverse(node.next, node);
  // reverse from tail all the way up to head
  node.next = previous;
  
  return newHead;
}

export default reverseLinkedList