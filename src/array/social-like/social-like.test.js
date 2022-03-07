const getLikes = require("./social-like");

test("getLikes function exists", () => {
  expect(typeof getLikes).toBe("function");
});

test("getLikes as one parameter", () => {
  expect(getLikes.length).toBe(1);
});

test("getLikes no like", () => {
  expect(getLikes([])).toBe("Be the first to like this");
});

test("getLikes one like", () => {
  expect(getLikes(["Cartman"])).toBe("Cartman likes this");
  expect(getLikes(["Bart"])).toBe("Bart likes this");
});

test("getLikes two likes", () => {
  expect(getLikes(["Kenny", "Cartman"])).toBe("Kenny and Cartman like this");
  expect(getLikes(["Bart", "Lisa"])).toBe("Bart and Lisa like this");
});

test("getLikes more likes", () => {
  expect(getLikes(["Stan", "Kyle", "Kenny", "Cartman"])).toBe(
    "Stan and 3 other people like this"
  );
  expect(getLikes(["Homer", "Marge", "Bart", "Lisa", "Maggie"])).toBe(
    "Homer and 4 other people like this"
  );
});
