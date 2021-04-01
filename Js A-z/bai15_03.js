/** 
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. 
 */

function first(arr, n) {
    // your code here...
    var i = 0;
    var tam = [];
    while (i <= n) {
        tam.push(arr.shift());
        i++;
    }
    return tam;
}

console.log(first([1, 2, 3], 2)); // expect [1, 2]