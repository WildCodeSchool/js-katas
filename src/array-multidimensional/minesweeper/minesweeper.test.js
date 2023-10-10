// sweep.test.js

const sweep = require('./minesweeper'); // Assure-toi de fournir le bon chemin vers ta fonction sweep
// ou tu peux directement importer la fonction si elle est définie dans le même fichier.

test('Cell contains a bomb, should return "kaboom"', () => {
    const grid = [
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [1, 0, 0, 0]
    ];
    const result = sweep(grid, 1, 1);
    expect(result).toBe('kaboom');
});

test('Cell is empty with no adjacent bombs, should return 0', () => {
    const grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    const result = sweep(grid, 1, 1);
    expect(result).toBe(0);
});

test('Cell is empty with adjacent bombs, should return the number of adjacent bombs', () => {
    const grid = [
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [1, 0, 0, 0]
    ];
    const result = sweep(grid, 1, 2);
    expect(result).toBe(2);
});

test('Row or column is out of bounds, should throw RangeError', () => {
    const grid = [
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [1, 0, 0, 0]
    ];
    expect(() => sweep(grid, 3, 2)).toThrow(RangeError);
});
