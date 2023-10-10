// uniq.test.js

const uniq = require('./uniq'); // Assure-toi de fournir le bon chemin vers ta fonction uniq
// ou tu peux directement importer la fonction si elle est définie dans le même fichier.

test('Consecutive duplicates are reduced to one instance', () => {
    const sequence1 = ['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c'];
    const result1 = uniq(sequence1);
    expect(result1).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
});

test('No duplicates in the sequence', () => {
    const sequence2 = ['a', 'b', 'c', 'd', 'e'];
    const result2 = uniq(sequence2);
    expect(result2).toEqual(['a', 'b', 'c', 'd', 'e']);
});

test('Empty sequence remains empty', () => {
    const sequence3 = [];
    const result3 = uniq(sequence3);
    expect(result3).toEqual([]);
});

test('Sequence with only one type of element', () => {
    const sequence4 = ['x', 'x', 'x', 'x'];
    const result4 = uniq(sequence4);
    expect(result4).toEqual(['x']);
});

test('Non-consecutive duplicates remain unchanged', () => {
    const sequence5 = ['a', 'b', 'c', 'a', 'b', 'c'];
    const result5 = uniq(sequence5);
    expect(result5).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
});
