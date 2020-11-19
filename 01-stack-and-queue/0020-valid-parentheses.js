const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]

    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      const top = stack[stack.length - 1]

      if (
        (c === ')' && top === '(') ||
        (c === ']' && top === '[') ||
        (c === '}' && top === '{')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isValid('()'))
