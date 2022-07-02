const correctIndex = (num, shift) => {
  let ans = num + shift;
  if (num < 97 || num > 122) {
    return num;
  }
  if (ans >= 97 && ans <= 122) {
    return ans;
  } if (ans > 122) {
    ans = 96 + (ans % 122);
  }
  return ans;
};

const cryptify = (string, shift) => {
  const answer = string
    .split('')
    .map((char) => String.fromCharCode(correctIndex(char.toLowerCase().charCodeAt(), shift)))
    .join('');

  return answer;
};

export default cryptify;
