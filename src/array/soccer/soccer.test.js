const getScore = require("./soccer");

test("function exists", () => {
  expect(typeof getScore).toBe("function");
});

test("length", () => {
    expect(getScore.length).toBe(1);
});

test("score null", () => {
    expect(getScore(null)).toBe("Illegal argument");
});
  
test("score []", () => {
    expect(getScore([])).toBe("0-0: draw");
});

test("score [1, 1, 1]", () => {
    expect(getScore([1, 1, 1])).toBe("3-0: team 1 wins the game");
});
      
test("score [2, 2, 2]", () => {
    expect(getScore([2, 2, 2])).toBe("0-3: team 2 wins the game");
});

test("score [1, 1, 2, 2]", () => {
    expect(getScore([1, 1, 2, 2])).toBe("2-2: draw");
});
          
test("score [1, 2, 1, 3, 1, 2]", () => {
    expect(getScore([1, 2, 1, 3, 1, 2])).toBe("Illegal argument");
});

test("score with strings", () => {
    expect(getScore(["1", "2"])).toBe("Illegal argument");
});
