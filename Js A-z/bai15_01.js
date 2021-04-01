function removeEnd(arr, n) {
    /*
        Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
        
    */
    arr.length = arr.length - n;
    return arr;
}

console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));