import reverseString from './reverse_string';

test('a word', () => {
  expect(reverseString('cookie')).toBe('eikooc');
});

test('palindrome', () => {
  expect(reverseString('noon')).toBe('noon');
});
