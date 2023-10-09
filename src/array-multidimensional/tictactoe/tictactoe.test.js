
const winner = require('./tictactoe'); // Assure-toi de fournir le bon chemin vers ta fonction winner
// ou tu peux directement importer la fonction si elle est définie dans le même fichier.

test('Player X wins in a row', () => {
    const grid = [
        ["X", "O", "O"],
        ["X", "O", "O"],
        ["X", " ", " "]
    ];
    const result = winner(grid);
    expect(result).toBe("X wins");
});

test('Player O wins in a column', () => {
    const grid = [
        ["X", "O", "O"],
        ["X", "O", "O"],
        [" ", "O", "X"]
    ];
    const result = winner(grid);
    expect(result).toBe("O wins");
});

test("It's a draw (Cat's game)", () => {
    const grid = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", "O"]
    ];
    const result = winner(grid);
    expect(result).toBe("Cat's game");
});

test('Illegal character in the grid, should throw Error', () => {
    const grid = [
        ["X", "O", "O"],
        ["X", "X", "O"],
        [" ", "!", " "]
    ];
    expect(() => winner(grid)).toThrow(Error);
});
