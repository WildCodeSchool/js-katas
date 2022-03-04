/*
Chmod:

In Unix-like operating systems, chmod is the command which is used to change the access permissions of files and directories.

* Numerical

The numerical permissions are composed of three integers, from 0 to 7, corresponding to "user", "group" and "other" rights.

In order to understand how a permission is assigned to an integer, you need to convert to binary :

    r w x
0 : 0 0 0
1 : 0 0 1
2 : 0 1 0
3 : 0 1 1
4 : 1 0 0
5 : 1 0 1
6 : 1 1 0
7 : 1 1 1

Each binary digit is assigned to a corresponding right : read (r), write (w), execute (x).

If a digit value is 1, the right is obtained.

Example:
> entry:  142
> binary: 001 100 010

* Octal

The octal mode assign the corresponding right r, w, x if the digit is 1, and a dash - if it's 0.

Example:
> binary:  001 100 010
> octal:   --x r-- -w-

Kata:

Create a function `chmod` with converts numerical permissions to octal mode.

Example:
> numerical : "000", result : "---------"
> numerical : "352", result : "-wxr-x-w-"
> numerical : "777", result : "rwxrwxrwx"

You can convert decimal to binary using this : Number(decimal).toString(2)

Add your own tests.

*/

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof chmod, "function");
assert.strictEqual(chmod.length, 1);
// TODO add your tests:

// End of tests
