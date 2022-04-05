# JS Katas

## Katas

### Fundamental

- [hello-you](./src/fundamental/hello-you/hello-you.js)
- [fizz-buzz](./src/fundamental/fizz-buzz/fizz-buzz.js)
- [sum-of-multiples](./src/fundamental/sum-of-multiples/sum-of-multiples.js)
- [math-min](./src/fundamental/math-min/math-min.js)
- [math-pow](./src/fundamental/math-pow/math-pow.js)

### Array

- [social-like](./src/array/social-like/social-like.js)
- [found-min](./src/array/found-min/found-min.js)
- [sum-of-odds](./src/array/sum-of-odds/sum-of-odds.js)
- [inverse-values](./src/array/inverse-values/inverse-values.js)
- [soccer](./src/array/soccer/soccer.js)

### String

- [count-letters](./src/string/count-letters/count-letters.js)
- [palindrome](./src/string/palindrome/palindrome.js)
- [duration](./src/string/duration/duration.js)
- [abbreviate-names](./src/string/abbreviate-names/abbreviate-names.js)
- [string-compare](./src/string/string-compare/string-compare.js)

### Array functions

- [only-odds](./src/array-functions/only-odds/only-odds.js)
- [pascal-case](./src/array-functions/pascal-case/pascal-case.js)
- [censorship](./src/array-functions/censorship/censorship.js)
- [uniq](./src/array-functions/uniq/uniq.js)

### Object

- [person](./src/object/person/person.js)
- [shape](./src/object/shape/shape.js)

### Database

- [database-modeling](./src/database/database-modeling/database-modeling.md)
- [sql-queries](./src/database/sql-queries/sql-queries.md)

### Array Advanced

- [tennis-score](./src/array-advanced/tennis-score/tennis-score.js)
- [pyramid-builder](./src/array-advanced/pyramid-builder/pyramid-builder.js)

### String Advanced

- [runlength-encoding](./src/string-advanced/runlength-encoding/runlength-encoding.js)
- [caesar-cipher](./src/string-advanced/caesar-cipher/caesar-cipher.js)

### Multidimensional Array

- [tictactoe](./src/array-multidimensional/tictactoe/tictactoe.js)
- [minesweeper](./src/array-multidimensional/minesweeper/minesweeper.js)

### Collection

- [morse-code](./src/collection/morse-code/morse-code.js)
- [roman-numerals](./src/collection/roman-numerals/roman-numerals.js)

### Number conversion

- [binary-to-decimal](./src/number-conversion/binary-to-decimal/binary-to-decimal.js)
- [decimal-to-binary](./src/number-conversion/decimal-to-binary/decimal-to-binary.js)
- [chmod](./src/number-conversion/chmod/chmod.js)
- [hex-to-decimal](./src/number-conversion/hex-to-decimal/hex-to-decimal.js)
- [hex-to-rgb](./src/number-conversion/hex-to-rgb/hex-to-rgb.js)

### Recursion

- [recursive-factorial](./src/recursion/recursive-factorial/recursive-factorial.js)
- [recursive-fibonacci](./src/recursion/recursive-fibonacci/recursive-fibonacci.js)
- [recursive-exponentiation](./src/recursion/recursive-exponentiation/recursive-exponentiation.js)
- [recursive-multiply](./src/recursion/recursive-multiply/recursive-multiply.js)

### Binary Tree

- [binarytree-max](./src/binary-tree/binarytree-max/binarytree-max.js)
- [binarytree-sum](./src/binary-tree/binarytree-sum/binarytree-sum.js)
- [binarytree-search](./src/binary-tree/binarytree-search/binarytree-search.js)

## Setup

### 1. Get this repo

First, [**fork**](https://github.com/WildCodeSchool/js-katas/fork?fragment=1) this repository: you'll then have a copy of this repo under your GitHub account.

Then go to wherever you store your development work, and run these commands to clone the forked repo (replace `GITHUB_LOGIN` with your login):

```sh
# download your code locally
git clone https://github.com/GITHUB_LOGIN/js-katas.git

# change working directory to the newly cloned repository
cd js-katas
```

### 2. Configure this repo

**Prerequisites**: you must have installed Node

Install the needed libraries:

```sh
npm install
```

## Testing

### 1. Fundamental katas

Fundamental katas use the Node Assert testing library: https://nodejs.org/api/assert.html

```sh
node src/fundamental/kata-name/kata-name.js
```

### 2. Other katas

The other katas use the Jest testing framework: https://jestjs.io/docs/getting-started

```sh
npm test -- kata-name
```
