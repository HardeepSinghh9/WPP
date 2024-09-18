// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function num(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  } else if (z > y) {
    return "soft mode";
  } else {
    return "undefined";
  }
}

console.log(num(10, 15, 31));
console.log(num(24, 22, 31));
console.log(num(22, 22, 31));
