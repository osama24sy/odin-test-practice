import capitalize from './capitalize';

test('one word', () => {
  expect(capitalize('cookie')).toBe('Cookie');
});

test('a sentence', () => {
  expect(capitalize('monster ate a cookie')).toBe('Monster ate a cookie');
});

test('multiple uppercases', () => {
  expect(capitalize('monster Ate a Cookie')).toBe('Monster ate a cookie');
});