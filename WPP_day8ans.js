// Write a JavaScript program to check whether a string starts with 'Java'  return True if it does not then  return False.

res = (string) => {
  check = string.substring(0, 4);
  if (string.length > 3) {
    if (check == `java`) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

console.log(res(`java at start?`));
