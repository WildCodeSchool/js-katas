const convertTime = require("./duration");

test("convertTime function exists", () => {
  expect(typeof convertTime).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(convertTime.length).toBe(1);
});

// TODO add your tests here
