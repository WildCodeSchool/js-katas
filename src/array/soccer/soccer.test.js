const getScore = require('./soccer.js');

test("getScore function exists", () => {
    expect(typeof getScore).toBe("function");
  });
  
  test("getScore has one parameter", () => {
    expect(getScore.length).toBe(1);
  });
  
  test("getScore returns correct result for [1, 1, 1]", () => {
    expect(getScore([1, 1, 1])).toBe("3-0: team 1 wins the game");
  });
  
  test("getScore returns correct result for [2, 1, 2, 2]", () => {
    expect(getScore([2, 1, 2, 2])).toBe("1-3: team 2 wins the game");
  });
  
  test("getScore returns correct result for [1, 2, 1, 2]", () => {
    expect(getScore([1, 2, 1, 2])).toBe("2-2: draw");
  });
  
  test("getScore returns correct result for empty array", () => {
    expect(getScore([])).toBe("0-0: draw");
  });
  
  test("getScore returns 'Illegal argument' for null", () => {
    expect(getScore(null)).toBe("Illegal argument");
  });
  
  test("getScore returns 'Illegal argument' for [1, 3, 2]", () => {
    expect(getScore([1, 3, 2])).toBe("Illegal argument");
  });