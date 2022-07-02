const capitalize = (string) => {
  const firstLetter = string[0].toUpperCase();
  const rest = string.slice(1, string.length).toLowerCase();

  return firstLetter + rest;
};

export default capitalize;
