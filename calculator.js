function divideNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }

  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

module.exports = { divideNumbers };