/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s % 2 === 1) {
    return false
  }

  const stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  for (const c of s) {
    if (map.has(c)) {
      stack.push(c)
    } else {
      const top = stack[stack.length - 1]

      if (c === map.get(top)) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}
