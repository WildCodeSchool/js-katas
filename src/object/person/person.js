/*
Créez une classe Person qui comporte :

- Un constructeur qui initialise trois propriétés dans cet ordre : name (string), age (nombre) et weeaboo (booléen).
- Une méthode introduce qui renvoie "My name is {name} and I am {age}", où {name} et {age} sont remplacés par leurs propriétés respectives.
- Une méthode greets qui reçoit un nom (name, string) en paramètre et renvoie "Hello {name}" si weeaboo est faux, et "Ohayou {name}-chan" si weeaboo est vrai.

Ensuite, créer une classe Hero qui hérite de Person :
- Un constructeur qui initialise une nouvelle propriété power (string).
- Lors de l'appel de introduce, en plus de la présentation classique, le héros devra indiquer son pouvoir : "My superpower is {power}".

Bonus : modifier la classe Person :

- Ajouter une méthode match qui reçoit une personne (Person) en paramètre et renvoie vrai si les propriétés weeaboo actuels et de l'argument sont identiques.

TODO :
- créer la classe Person et son constructeur
- créer la méthode introduce
- créer la méthode greets
- créer des instances de Person
- créer la classe Hero et son constructeur
- redéfinir la méthode introduce
- créer des instances de Hero
- Bonus : créer la méthode match

*/

// Votre code ici !


// Begin of tests
/*
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
      "Ohayou Uzaki-chan"
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
*/