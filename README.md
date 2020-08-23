# JS Katas

## Katas

### Fundamental

- [hello-you](./exercises/hello-you.js)
- [fizz-buzz](./exercises/fizz-buzz.js)
- [sum-of-multiples](./exercises/sum-of-multiples.js)

### Array

- [social-like](./exercises/social-like.js)
- [found-min](./exercises/found-min.js)
- [sum-of-odds](./exercises/sum-of-odds.js)
- [inverse-values](./exercises/inverse-values.js)

### String

- [count-letters](./exercises/count-letters.js)
- [palindrome](./exercises/palindrome.js)
- [duration](./exercises/duration.js)
- [abbreviate-names](./exercises/abbreviate-names.js)
- [string-compare](./exercises/string-compare.js)

### Functional programming

- [only-odds](./exercises/only-odds.js)
- [uniq](./exercises/uniq.js)
- [pascal-case](./exercises/pascal-case.js)
- [censorship](./exercises/censorship.js)

### Object

- [person](./exercises/person.js)
- [shape](./exercises/shape.js)

### Database

- [database-modeling](./exercises/database-modeling.md)
- [sql-queries](./exercises/sql-queries.md)

### Array Advanced

- [tennis-score](./exercises/tennis-score.js)
- [pyramid-builder](./exercises/pyramid-builder.js)

### String Advanced

- [runlength-encoding](./exercises/runlength-encoding.js)
- [caesar-cipher](./exercises/caesar-cipher.js)

### Matrix

- [tictactoe](./exercises/tictactoe.js)
- [minesweeper](./exercises/minesweeper.js)

### Collections

- [morse-code](./exercises/morse-code.js)
- [roman-numerals](./exercises/roman-numerals.js)

### Binary

- [binary-to-decimal](./exercises/binary-to-decimal.js)
- [decimal-to-binary](./exercises/decimal-to-binary.js)
- [chmod](./exercises/chmod.js)

### Hexadecimal

- [hex-to-decimal](./exercises/hex-to-decimal.js)
- [hex-to-rgb](./exercises/hex-to-rgb.js)

### Recursion

- [recursive-factorial](./exercises/recursive-factorial.js)
- [recursive-fibonacci](./exercises/recursive-fibonacci.js)
- [recursive-exponentiation](./exercises/recursive-exponentiation.js)
- [recursive-multiply](./exercises/recursive-multiply.js)

### Binary Tree

- [binarytree-max](./exercises/binarytree-max.js)
- [binarytree-sum](./exercises/binarytree-sum.js)
- [binarytree-search](./exercises/binarytree-search.js)

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

You can run tests for a single kata:

```sh
# run the test runner with one arg (e.g: hello-you, fizz-buzz...)
./tester kata-name
```

![output-tester-basics](img/output-tester-basics.png)

## Solving

You can start editing the JavaScript files with your favorite text editor i.e. VSCode, Atom, Sublime Text, etc.

![where-to-code](img/where-to-code.png)

Credits: [Clément Denis](https://github.com/kigiri) for the [original repo](https://github.com/nan-academy/js-training).
