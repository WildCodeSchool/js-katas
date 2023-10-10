const censor = require("./censorship");

test("censor function exists", () => {
  expect(typeof censor).toBe("function");
});

test("censor has two parameters", () => {
  expect(censor.length).toBe(2);
});

test("censor returns correct result for forbidden word 'tacos'", () => {
  const sentences = [
    "I love the smell of tacos in the morning.",
    "Where is my umbrella?",
    "The test is not a diagnosis of the disease psittacosis.",
    "Eat tacos every day."
  ];

  const forbiddenWord = "tacos";

  const result = censor(sentences, forbiddenWord);

  const expected = [
    "I love the smell of ***** in the morning.",
    "Where is my umbrella?",
    "The test is not a diagnosis of the disease psittacosis.",
    "Eat ***** every day."
  ];

  expect(result).toEqual(expected);
});

test("censor returns correct result for forbidden word 'umbrella'", () => {
    const sentences = [
      "I love the smell of tacos in the morning.",
      "Where is my umbrella?",
      "The test is not a diagnosis of the disease psittacosis.",
      "Eat tacos every day."
    ];
  
    const forbiddenWord = "umbrella";
  
    const result = censor(sentences, forbiddenWord);
  
    const expected = [
      "I love the smell of tacos in the morning.",
      "Where is my ********?",
      "The test is not a diagnosis of the disease psittacosis.",
      "Eat tacos every day."
    ];
  
    expect(result).toEqual(expected);
  });
  

test("censor returns correct result for empty array of sentences", () => {
  const sentences = [];

  const forbiddenWord = "tacos";

  const result = censor(sentences, forbiddenWord);

  const expected = [];

  expect(result).toEqual(expected);
});
