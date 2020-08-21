"use strict";
/*
Create three classes which inherit the class Shape:
* Rectangle
* Triangle
* Circle

For each classes:
* add a constructor and initialise the necessary attributes
* implement the area method.

Create a class Square, which inherits Rectangle:
* add a constructor with only a side argument
* call the constructor of its parent with the super keyword
* do not implement the area method!

*/

// Don't touch this!
class Shape {
  constructor() {}

  area() {
    throw new Error("You have to implement the method area!");
  }
}

// TODO your classes here:

// Begin of tests
const assert = require("assert");
const { type } = require("os");
assert.strictEqual(typeof Shape, "function", "Shape class is defined");
assert.strictEqual(
  typeof new Shape().area,
  "function",
  "Shape area method is defined"
);
assert.throws(() => {
  new Shape().area();
}, /^Error: You have to implement the method area!$/);
assert.strictEqual(typeof Rectangle, "function", "Rectangle class is defined");
if (typeof Rectangle === "function") {
  assert.strictEqual(
    Rectangle.prototype instanceof Shape,
    true,
    "Rectangle inherits Shape"
  );
  assert.strictEqual(
    Rectangle.toString().includes("constructor"),
    true,
    "Rectangle has a constructor"
  );
  assert.strictEqual(new Rectangle(2, 3).area(), 6);
}
assert.strictEqual(typeof Triangle, "function", "Triangle class is defined");
if (typeof Triangle === "function") {
  assert.strictEqual(
    Triangle.prototype instanceof Shape,
    true,
    "Triangle inherits Shape"
  );
  assert.strictEqual(
    Triangle.toString().includes("constructor"),
    true,
    "Triangle has a constructor"
  );
  assert.strictEqual(new Triangle(3, 4).area(), 6);
}
assert.strictEqual(typeof Circle, "function", "Circle class is defined");
if (typeof Circle === "function") {
  assert.strictEqual(
    Circle.prototype instanceof Shape,
    true,
    "Circle inherits Shape"
  );
  assert.strictEqual(
    Circle.toString().includes("constructor"),
    true,
    "Circle has a constructor"
  );
  assert.strictEqual(Math.round(new Circle(1.954410048).area()), 12);
}
assert.strictEqual(typeof Square, "function", "Square class is defined");
if (typeof Square === "function") {
  assert.strictEqual(
    Square.prototype instanceof Rectangle,
    true,
    "Square inherits Rectangle"
  );
  assert.strictEqual(
    Square.toString().includes("constructor"),
    true,
    "Square has a constructor"
  );
  assert.strictEqual(new Square(3).area(), 9);
}

// End of tests
