/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = []

  for (const c of ops) {
    switch (c) {
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break

      case 'C':
        stack.pop()
        break

      case 'D':
        stack.push(stack[stack.length - 1] * 2)
        break

      default:
        stack.push(+c)
        break
    }
  }

  return stack.reduce((sum, val) => sum + val, 0)
};
