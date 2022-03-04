const compare = require("./string-compare");

test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare as two parameters", () => {
  expect(compare.length).toBe(2);
});

// TODO add your tests here
