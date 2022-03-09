const sum = require("./sum-of-odds");

test("sum function exists", () => {
  expect(typeof sum).toBe("function");
});

test("sum as one parameter", () => {
  expect(sum.length).toBe(1);
});

test("sum empty array", () => {
  expect(sum([])).toBe(0);
});

test("sum null array", () => {
  expect(sum(null)).toBe(0);
});

test("sum one value", () => {
  expect(sum([-1])).toBe(-1);
  expect(sum([0])).toBe(0);
  expect(sum([1])).toBe(1);
  expect(sum([2])).toBe(0);
});

test("sum multiple values", () => {
  expect(sum([1, 2, 3])).toBe(4);
  expect(sum([-3, 3])).toBe(0);
});
