/*
Create a function `sweep` which takes a grid and two numbers as parameters :
* grid : a minesweeper matrix where 0 are empty cells and 1 are bombs. The width and height of the grid can vary.
* row : the vertical coordinate of the cell to sweep
* column : the horizontal coordinate of the cell to sweep

The function will check the cell using the coordinates and returns :
* "kaboom", if it contains a boom
* the number of adjacent bombs, if it's empty

The function will throw :
* TypeError if grid is null or not an array
* TypeError if at least one value of the grid is not 0 or 1
* TypeError if row or column are null or not a number
* RangeError if grid has a width or height inferior to one
* RangeError if row or column are out of bounds

Example :

grid :
[
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0]
]
row : 1
column : 2

result : 2

*/

// TODO add your code here


module.exports = sweep;
