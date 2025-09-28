/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.rows = rows;
    this.grid = Array.from({ length: rows }, () => Array(26).fill(0));

};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    let col =  cell.charCodeAt(0) - 'A'.charCodeAt(0);
    let row = parseInt( cell.slice(1)) - 1;
    this.grid[row][col] = value;
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    let col =  cell.charCodeAt(0) - 'A'.charCodeAt(0);
    let row = parseInt( cell.slice(1)) - 1;

    this.grid[row][col] = 0;
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    let one, two;
    for(let i = 0 ; i<formula.length; i++){
        if (formula[i] === '+'){
            one = formula.slice(1,i);
            two = formula.slice(i + 1, formula.length );
            break;
        }
    }

    if (isNaN(one)){ 
        let col = one[0].charCodeAt(0) - 'A'.charCodeAt(0);
        let row = parseInt( one.slice(1)) - 1;

        one = (this.grid[row] && this.grid[row][col]) ? this.grid[row][col] : 0;
    } else {
        one  = parseInt(one);
    }

    if (isNaN(two)){
        let col = two[0].charCodeAt(0) - 'A'.charCodeAt(0);
        let row = parseInt( two.slice(1)) - 1;

        two = (this.grid[row] && this.grid[row][col]) ? this.grid[row][col] : 0;
    } else {
        two  = parseInt(two);
    }
    return one + two;
};