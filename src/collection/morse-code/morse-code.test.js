const decode = require('./morse-code');

test('Decodes a simple Morse code message', () => {
    const morseCode = ".- -... -.-.";
    const result = decode(morseCode);
    console.log(result);
    expect(result).toBe("ABC");
});


test('Decodes a Morse code message with punctuation', () => {
    const morseCode = "-.-.--   .-.-.-   ..--..";
    const result = decode(morseCode);
    expect(result).toBe("! . ?");
});

test('Decodes a Morse code message with multiple spaces between words', () => {
    const morseCode = "...   ---   ...";
    const result = decode(morseCode);
    expect(result).toBe("S O S");
});
