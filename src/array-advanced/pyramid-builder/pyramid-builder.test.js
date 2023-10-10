const build = require("./pyramid-builder");

test("build function exists", () => {
  expect(typeof build).toBe("function");
});

test("build has one parameter", () => {
  expect(build.length).toBe(1);
});

test("build returns correct pyramid for n = 5", () => {
  const result = build(5);
  const expected = [
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
  ];
  expect(result).toEqual(expected);
});

test("build returns correct pyramid for n = 1", () => {
  const result = build(1);
  const expected = [
    "*"
  ];
  expect(result).toEqual(expected);
});

test("build throws RangeError for n = 0", () => {
    expect(() => build(0)).toThrow(RangeError);
  });
  
  test("build throws RangeError for n = -3", () => {
    expect(() => build(-3)).toThrow(RangeError);
  });
  
  test("build throws TypeError for null", () => {
    expect(() => build(null)).toThrow(TypeError);
  });
  
  test("build throws TypeError for 'abc'", () => {
    expect(() => build("abc")).toThrow(TypeError);
  });