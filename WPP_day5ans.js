//write a javacript program to remove a character at the specified position in a given string and return the modified string.

function rem(str, key) {
  return str.slice(0, key) + str.slice(key + 1);
}

let str = "remove the character";
let res = rem(str, 7);
console.log(res);
