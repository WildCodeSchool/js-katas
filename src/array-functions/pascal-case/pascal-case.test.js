const pascalCase = require('./pascal-case');

test('Convert empty sentence to empty string', () => {
    const sentence = "";
    const result = pascalCase(sentence);
    expect(result).toBe("");
});

test('Convert sentence with single word to PascalCase', () => {
    const sentence = "hello";
    const result = pascalCase(sentence);
    expect(result).toBe("Hello");
});

test('Convert sentence to PascalCase', () => {
    const sentence1 = "this is sparta";
    const result1 = pascalCase(sentence1);
    expect(result1).toBe("ThisIsSparta");
});

test('Convert sentence with mixed case to PascalCase', () => {
    const sentence2 = "sO rAdicAL DuDe";
    const result2 = pascalCase(sentence2);
    expect(result2).toBe("SoRadicalDude");
});

test('Convert sentence with leading and trailing spaces to PascalCase', () => {
    const sentence = "   leading and trailing   ";
    const result = pascalCase(sentence);
    expect(result).toBe("LeadingAndTrailing");
});