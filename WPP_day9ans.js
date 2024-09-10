// write a javascript program to find the closest value to 100 from two numberical values
function abc(a, b) {
  if (a != b) {
    val1 = Math.abs(a - 100);
    val2 = Math.abs(b - 100);

    if (val1 < val2) {
      return a;
    }
    if (val2 < val1) {
      return b;
    }
    return 0;
  } else return false;
}

console.log(abc(40, 49));
console.log(abc(-100, -189));
console.log(abc(56, 56));
console.log(abc(149, 150));
