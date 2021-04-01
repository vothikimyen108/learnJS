var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
//tronng js dấu === xảy ra khi bằng cả về giá trị và object thuộc tính khi gán a 1 mảng và b 1 mảng đã tạo ra 2 mảng ở hai vùng nhớ khác nhau
//bằng true khi a=b, c=b , a=c;