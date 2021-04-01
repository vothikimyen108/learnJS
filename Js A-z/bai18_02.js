// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    var result = arr.filter(function(itiem) {
        return itiem % 2 === 0;
    })
    return result;
}