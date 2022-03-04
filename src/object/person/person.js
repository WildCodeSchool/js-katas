/*
Create a class `Person` which has :
* a constructor which initialize three attributes in this order : name (string), age (number) and weeaboo (boolean)
* a method `introduce` which returns "My name is {name} and I am {age}", where {name} and {age} are replaced with their respective attributes
* a method `greets` which receives a name (string) as parameter and returns "Hello {name}" if `weeaboo` is false, and "Ohayo {name}-chan" if `weeaboo` is true
* a method `match` which receives a person (Person) as parameter and returns true if the current `weeaboo` and argument `weeaboo` attributes are the same

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");
assert.strictEqual(typeof Person, "function", "Person class is undefined");
if (typeof Person === "function") {
  assert.strictEqual(new Person("John Doe", 30, false).name, "John Doe");
  assert.strictEqual(new Person("John Doe", 30, false).age, 30);
  assert.strictEqual(new Person("John Doe", 30, false).weeaboo, false);
  assert.strictEqual(
    typeof new Person().introduce,
    "function",
    "introduce method is undefined"
  );
  if (typeof new Person().introduce === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).introduce(),
      "My name is John Doe and I am 30"
    );
  }
  assert.strictEqual(
    typeof new Person().greets,
    "function",
    "greets method is undefined"
  );
  if (typeof new Person().greets === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).greets("Barbara"),
      "Hello Barbara"
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).greets("Uzaki"),
      "Ohayo Uzaki-chan"
    );
  }
  assert.strictEqual(
    typeof new Person().match,
    "function",
    "match method is undefined"
  );
  if (typeof new Person().match === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).match(
        new Person("Jane Doe", 30, false)
      ),
      true
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, false)),
      false
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, true)),
      true
    );
  }
}

// End of tests
