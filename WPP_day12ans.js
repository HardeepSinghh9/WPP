// Write a JavaScript program to reverse a given string.

function rev(str) {
  return str.split("").reverse().join("");
}

console.log(rev("helllo"));
console.log(rev("abcd efgh"));
