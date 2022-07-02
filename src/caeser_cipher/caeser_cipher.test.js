import cryptify from './caeser_cipher';

test('expect a to be b after one shift', () => {
  expect(cryptify('a', 1)).toBe('b');
});

test('one word', () => {
  expect(cryptify('cookie', 2)).toBe('eqqmkg');
});

test('z edge case', () => {
  expect(cryptify('z', 1)).toBe('a');
});

test('upper case', () => {
  expect(cryptify('Monster', 6)).toBe('sutyzkx');
});

test('space and puctuation', () => {
  expect(cryptify('Be yourself; everyone else is already taken.', 6))
    .toBe('hk euaxykrl; kbkxeutk kryk oy grxkgje zgqkt.');
});
