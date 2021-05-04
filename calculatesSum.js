let calculatesSum = function (a, b, c) {
  if (c === "+") {
    return a + b;
  } else if (c === "-") {
    return a - b;
  } else if (c === "*") {
    return a * b;
  } else if (c === "/") {
    return a / b;
  }
};
console.log(calculatesSum(3, 2, "*"));
