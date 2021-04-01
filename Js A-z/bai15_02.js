/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 * The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * thay thế phần tử của mảng bằng cách thay đổi, loại bỏ phẩn tử hiện có hoặc thêm phân tử mới
 * 0 là thêm 1 là thay thế xoa
 *  */
var animal = ['cat', 'dog', 'mouse'];
animal.splice(0, 0, 'duck');
console.log(animal);
animal.splice(2, 1, 'bird');
console.log(animal);
//remove
animal.splice(0, 1);
console.log(animal);
//copy a array.
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
//copy tạo 1 phản mới có chỉ số bắt đầu từ .. đến
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(0, 1));
console.log(animals.slice(2));