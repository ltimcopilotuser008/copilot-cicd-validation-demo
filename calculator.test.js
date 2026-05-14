// Write Jest unit tests for divideNumbers from calculator.js.
// Include tests for valid division, division by zero, invalid input,
// negative numbers, and decimal values.

const { divideNumbers } = require("./calculator");

describe("divideNumbers", () => {
  test("should divide two positive numbers correctly", () => {
    expect(divideNumbers(10, 2)).toBe(5);
  });

  test("should return 'Cannot divide by zero' when dividing by zero", () => {
    expect(divideNumbers(10, 0)).toBe("Cannot divide by zero");
  });

  test("should return 'Invalid input' when inputs are not numbers", () => {
    expect(divideNumbers("10", 2)).toBe("Invalid input");
    expect(divideNumbers(10, "2")).toBe("Invalid input");
  });

  test("should divide negative numbers correctly", () => {
    expect(divideNumbers(-10, 2)).toBe(-5);
    expect(divideNumbers(10, -2)).toBe(-5);
    expect(divideNumbers(-10, -2)).toBe(5);
  });

  test("should divide decimal numbers correctly", () => {
    expect(divideNumbers(5.5, 2)).toBeCloseTo(2.75);
    expect(divideNumbers(5, 2.5)).toBeCloseTo(2);
  });
});//tests