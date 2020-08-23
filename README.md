# JS Katas

Credits: [Clément Denis](https://github.com/kigiri) for the [original repo](https://github.com/nan-academy/js-training).

## Katas

### Fundamental

- hello-you
- fizz-buzz
- sum-of-multiples

### Array

- social-like
- found-min
- sum-of-odds
- inverse-values

### String

- count-letters
- palindrome
- duration
- abbreviate-names
- string-compare

### Functional programming

- only-odds
- uniq
- pascal-case
- censorship

### Object

- person
- shape

### Database

- database-modeling
- sql-queries

### Array Advanced

- tennis-score
- pyramid-builder

### String Advanced

- runlength-encoding
- caesar-cipher

### Matrix

- tictactoe
- minesweeper

### Collections

- morse-code
- roman-numerals

### Binary

- binary-to-decimal
- decimal-to-binary
- chmod

### Hexadecimal

- hex-to-decimal
- hex-to-rgb

### Recursion

- recursive-factorial
- recursive-fibonacci
- recursive-exponentiation
- recursive-multiply

## Setup

### 1. Get this repo

First, [**fork**](https://github.com/WildCodeSchool/js-training-tdd/fork?fragment=1) this repository: you'll then have a copy of this repo under your GitHub account.

Then go to wherever you store your development work, and run these commands to clone the forked repo (replace `GITHUB_LOGIN` with your login):

```sh
# download your code locally
git clone https://github.com/GITHUB_LOGIN/js-training-tdd.git

# change working directory to the newly cloned repository
cd js-training-tdd
```

**Prerequisites**: you must have installed Git!

Node.js is a platform which makes it possible to run JavaScript code outside the web browser.

You have to install Node.js, preferably **not** with the packages on Node's download page.

### 2. Install Node.js

#### On Linux/MacOS

**Note for Linux users**: before going further, run `which curl` in the terminal. If it shows something (example. `/usr/bin/curl`), you're good! Otherwise, run `sudo apt install -y curl` (Ubuntu/Debian) to install cURL.

You are going to use NVM (Node Version Manager). Here's a summary of what you have to do (see [installation instructions](https://github.com/nvm-sh/nvm#installation-and-update) on the NVM repo for more details). Run these commands in your terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install v12.16.1
nvm use v12.16.1
```

You can verify that it worked by running `node -v`, which should display:

    v12.16.1

#### On Windows

The original NVM doesn't support Windows. You're going to use [NVM for Windows](https://github.com/coreybutler/nvm-windows). Get to the [releases page](https://github.com/coreybutler/nvm-windows/releases). Under the latest version (1.1.7 as of September 2019), download the `nvm-setup.zip` file (or use this [direct link](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)).

Extract the archive, and run `nvm-setup.exe`. Complete the setup wizard. Then, quit Git Bash if it is running, re-launch it, and type:

```sh
nvm install v12.16.1
nvm use v12.16.1
```

Running `node -v` should display: `v12.16.1`.

## Testing

Once you have coded your masterpiece, you can start testing your solutions.

You can run tests for a single section:

```sh
# run the test runner with args ( basics, advanced, math, get)
./tester basics
```

![output-tester-basics](img/output-tester-basics.png)

**Later on**, you may use `tester` with no argument, to check exercises from _all_ sections (in this example, `basics`, `math` and part of `str` have been solved):

```sh
# run the test runner
./tester
```

![output-tester](img/output-tester.png)

## Solving

You can start editing the JavaScript files with your favorite text editor i.e. VSCode, Atom, Sublime Text, etc.

![where-to-code](img/where-to-code.png)

## Get Help!

We maintain an example-based code documentation

All you need to know to solve those exercises is described in them.

- [Primitive and Operators](examples/primitive-and-operators.js)
- [Variables](examples/variables.js)
- [Data-Structures](examples/data-structures.js)
- [Get](examples/get.js)
- [Set](examples/set.js)
- ...[full list](https://github.com/WildCodeSchool/js-training-tdd/tree/master/examples)

And we also made you a curated list of all the most useful methods:

- Math
  [min](https://devdocs.io/javascript/global_objects/math/min),
  [max](https://devdocs.io/javascript/global_objects/math/max),
  [abs](https://devdocs.io/javascript/global_objects/math/abs),
  [sign](https://devdocs.io/javascript/global_objects/math/sign),
  [round](https://devdocs.io/javascript/global_objects/math/round),
  [floor](https://devdocs.io/javascript/global_objects/math/floor),
  [ceil](https://devdocs.io/javascript/global_objects/math/ceil),
  [trunc](https://devdocs.io/javascript/global_objects/math/trunc),
  _[random](https://devdocs.io/javascript/global_objects/math/random)\*_
- String
  - Transform
    [slice](https://devdocs.io/javascript/global_objects/string/slice),
    [split](https://devdocs.io/javascript/global_objects/string/split),
    [replace](https://devdocs.io/javascript/global_objects/string/replace),
    [toUpperCase](https://devdocs.io/javascript/global_objects/string/touppercase),
    [toLowerCase](https://devdocs.io/javascript/global_objects/string/tolowercase),
    [trim](https://devdocs.io/javascript/global_objects/string/trim),
    [trimRight](https://devdocs.io/javascript/global_objects/string/trimright),
    [trimLeft](https://devdocs.io/javascript/global_objects/string/trimleft),
    [padStart](https://devdocs.io/javascript/global_objects/string/padstart),
    [padEnd](https://devdocs.io/javascript/global_objects/string/padend)
  - Search
    [includes](https://devdocs.io/javascript/global_objects/string/includes),
    [startsWith](https://devdocs.io/javascript/global_objects/string/startswith),
    [endsWith](https://devdocs.io/javascript/global_objects/string/endswith),
    [indexOf](https://devdocs.io/javascript/global_objects/string/indexof),
    [lastIndexOf](https://devdocs.io/javascript/global_objects/string/lastindexof),
    [charCodeAt](https://devdocs.io/javascript/global_objects/string/charcodeat)
- Arrays
  [Array.from](https://devdocs.io/javascript/global_objects/array/from),
  [Array.isArray](https://devdocs.io/javascript/global_objects/array/isarray),
  _[fill](https://devdocs.io/javascript/global_objects/array/fill)\*_
  - Search
    [find](https://devdocs.io/javascript/global_objects/array/find),
    [findIndex](https://devdocs.io/javascript/global_objects/array/findindex),
    [includes](https://devdocs.io/javascript/global_objects/array/includes),
    [indexOf](https://devdocs.io/javascript/global_objects/array/indexof),
    [lastIndexOf](https://devdocs.io/javascript/global_objects/array/lastindexof)
  - Transform
    [concat](https://devdocs.io/javascript/global_objects/array/concat),
    [join](https://devdocs.io/javascript/global_objects/array/join),
    [slice](https://devdocs.io/javascript/global_objects/array/slice),
    _[pop](https://devdocs.io/javascript/global_objects/array/pop)\*_,
    _[push](https://devdocs.io/javascript/global_objects/array/push)\*_,
    _[shift](https://devdocs.io/javascript/global_objects/array/shift)\*_,
    _[unshift](https://devdocs.io/javascript/global_objects/array/unshift)\*_,
    _[splice](https://devdocs.io/javascript/global_objects/array/splice)\*_
  - Re-order
    _[reverse](https://devdocs.io/javascript/global_objects/array/reverse)\*_,
    _[sort](https://devdocs.io/javascript/global_objects/array/sort)\*_
  - Functionnal Iteration
    [forEach](https://devdocs.io/javascript/global_objects/array/foreach),
    [filter](https://devdocs.io/javascript/global_objects/array/filter),
    [some](https://devdocs.io/javascript/global_objects/array/some),
    [every](https://devdocs.io/javascript/global_objects/array/every),
    [map](https://devdocs.io/javascript/global_objects/array/map),
    [reduce](https://devdocs.io/javascript/global_objects/array/reduce),
    [reduceRight](https://devdocs.io/javascript/global_objects/array/reduceright)
- Object
  [keys](https://devdocs.io/javascript/global_objects/object/keys),
  [values](https://devdocs.io/javascript/global_objects/object/values),
  [entries](https://devdocs.io/javascript/global_objects/object/entries),
  [assign](https://devdocs.io/javascript/global_objects/object/assign),
  [fromEntries](https://devdocs.io/javascript/global_objects/object/fromEntries)

_(\*) methods in italics are **NOT** pure (using them with the same arguments won't return the same result).
They must be used with caution as it is harder to predict their results_
