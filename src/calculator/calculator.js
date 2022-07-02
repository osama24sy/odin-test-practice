const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  }
  throw new Error('Cannot divide by zero');
};

export {
  add, subtract, multiply, divide,
};
