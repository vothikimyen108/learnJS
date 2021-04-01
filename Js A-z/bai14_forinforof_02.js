/* Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
*/

function multiply(arr) {
    var kq=1;
    for(var key of arr)
        kq*=key;
    return kq;
}

console.log(multiply([2, 3, 4])); // expect: 24