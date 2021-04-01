// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    var result = arr.filter(function(itiem) {
        return itiem >= 5;
    })
    return result;
}