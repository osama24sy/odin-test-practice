import {
  add, subtract, multiply, divide,
} from './calculator';

test('3 + 4 equal to 7', () => {
  expect(add(3, 4)).toEqual(7);
});

test('5 - 4 equal to 1', () => {
  expect(subtract(5, 4)).toEqual(1);
});

test('4 * 3 equal to 12', () => {
  expect(multiply(3, 4)).toEqual(12);
});

test('12 / 4 equal to 3', () => {
  expect(divide(12, 4)).toEqual(3);
});

test('5 / 0 equal to an error', () => {
  expect(() => divide(5, 0)).toThrow();
});
