/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = []

  for (let i = 0; i < ops.length; i++) {
    const c = ops[i]

    if (!isNaN(+c)) {
      stack.push(+c)
    } else {
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
      }
    }
  }

  return stack.reduce((sum, val) => sum + val, 0)
};
