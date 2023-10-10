
const odd = require('./only-odds');

test('Basic test', () => {
    const testArray = [1, 2, 3, 4, 5];
    const result = odd(testArray);
    expect(result).toEqual([1, 3, 5]);
});

test('Array with only even numbers', () => {
    const testArray = [2, 4, 6, 8, 10];
    const result = odd(testArray);
    expect(result).toEqual([]);
});

test('Array with only odd numbers', () => {
    const testArray = [1, 3, 5, 7, 9];
    const result = odd(testArray);
    expect(result).toEqual([1, 3, 5, 7, 9]);
});

test('Array with a mix of odd and even numbers', () => {
    const testArray = [2, 3, 4, 5, 6];
    const result = odd(testArray);
    expect(result).toEqual([3, 5]);
});