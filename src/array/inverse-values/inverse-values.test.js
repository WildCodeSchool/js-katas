const inverse = require("./inverse-values");

test("inverse function exists", () => {
  expect(typeof inverse).toBe("function");
});

test("inverse as one parameter", () => {
  expect(inverse.length).toBe(1);
});

test("inverse empty array", () => {
  expect(inverse([])).toStrictEqual([]);
});

test("inverse null", () => {
  expect(inverse(null)).toStrictEqual([]);
});

test("inverse one value", () => {
  expect(inverse([1])).toStrictEqual([-1]);
  expect(inverse([-1])).toStrictEqual([1]);
});

test("inverse multiple values", () => {
  expect(inverse([1, 2, 3, 4, 5])).toStrictEqual([-1, -2, -3, -4, -5]);
  expect(inverse([1, -2, 3, -4, 5])).toStrictEqual([-1, 2, -3, 4, -5]);
});

test("inverse doesn't mutate its argument", () => {
  let arg = [1];
  inverse(arg);
  expect(arg).toStrictEqual([1]);
});
