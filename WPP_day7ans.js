// Write a JavaScript program to create a string from a given string.
// This is done by taking the last 3 characters and adding them at both the front and back.
// The string length must be 3 or more.

function add(str) {
  if (str.length >= 3) {
    let aaa = str.substring(str.length - 3);
    return aaa + str + aaa;
  } else {
    return false;
  }
}
console.log(add("Ol"));
console.log(add("Ola"));
console.log(add("oooooAAA"));
