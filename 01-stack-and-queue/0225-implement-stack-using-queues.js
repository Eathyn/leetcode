/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.q1 = []
  this.q2 = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q1.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let q1_len = this.q1.length

  for (let i = 0; i < q1_len; i++) {
    const front = this.q1.pop()
    this.q2.push(front)
  }

  let q2_len = this.q2.length
  let result

  for (let i = 0; i < q2_len; i++) {
    if (this.q2.length === 1) {
      result = this.q2.pop()
    } else {
      const front = this.q2.pop()
      this.q1.push(front)
    }
  }

  return result
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.q1[this.q1.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
