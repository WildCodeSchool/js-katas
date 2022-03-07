const min = require("./found-min");

test("min function exists", () => {
  expect(typeof min).toBe("function");
});

test("min as one parameter", () => {
  expect(min.length).toBe(1);
});

test("min should not use Math.min()", () => {
  expect(min.toString().includes("Math.min")).toBe(false);
});

test("min should return null", () => {
  expect(min([])).toBe(null);
  expect(min(null)).toBe(null);
});

test("min array with only one value", () => {
  expect(min([0])).toBe(0);
  expect(min([1])).toBe(1);
  expect(min([-1])).toBe(-1);
});

test("min array with mutiple values", () => {
  expect(min([0, -1, 1])).toBe(-1);
  expect(min([-2, -1, -3])).toBe(-3);
  expect(min([2, 1, 3])).toBe(1);
});
