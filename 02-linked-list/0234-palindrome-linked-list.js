/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null) return true

  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalfStart = reverseList(firstHalfEnd.next)

  let p1 = head
  let p2 = secondHalfStart
  let res = true

  while (res && p2 !== null) {
    if (p1.val !== p2.val) {
      res = false
    }
    p1 = p1.next
    p2 = p2.next
  }

  firstHalfEnd.next = reverseList(secondHalfStart)
  return res
};

const reverseList = head => {
  let prev = null
  let curr = head

  while (curr !== null) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}

const endOfFirstHalf = head => {
  let fast = head
  let slow = head

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}
