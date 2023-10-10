const getScore = require("./tennis-score");

test("getScore function exists", () => {
  expect(typeof getScore).toBe("function");
});

test("getScore has one parameter", () => {
  expect(getScore.length).toBe(1);
});

test("getScore returns correct result for [1, 1, 1]", () => {
  expect(getScore([1, 1, 1])).toBe("40-love");
});

test("getScore returns correct result for [2, 1, 2, 2]", () => {
  expect(getScore([2, 1, 2, 2])).toBe("15-40");
});

test("getScore returns correct result for [1, 2, 1, 2, 1, 2]", () => {
  expect(getScore([1, 2, 1, 2, 1, 2])).toBe("deuce");
});

test("getScore returns correct result for [1, 1, 1, 2, 2, 2, 1]", () => {
  expect(getScore([1, 1, 1, 2, 2, 2, 1])).toBe("ad in");
});

test("getScore throws TypeError for null", () => {
  expect(() => getScore(null)).toThrow(TypeError);
});

test("getScore throws TypeError for non-array", () => {
  expect(() => getScore("abc")).toThrow(TypeError);
});

test("getScore throws TypeError for array with non-number elements", () => {
  expect(() => getScore([1, "abc", 2])).toThrow(TypeError);
});

test("getScore throws RangeError for array with invalid values", () => {
  expect(() => getScore([1, 3, 2])).toThrow(RangeError);
});