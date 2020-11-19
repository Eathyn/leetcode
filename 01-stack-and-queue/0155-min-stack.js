/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = null
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)

  if (this.min === null) {
    this.min = x
  } else {
    this.min = x < this.min ? x : this.min
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.min = this.stack.length !== 0 ? this.stack[0] : null

  for (let i = 1; i < this.stack.length; i++) {
    this.min = this.stack[i] < this.min ? this.stack[i] : this.min
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
