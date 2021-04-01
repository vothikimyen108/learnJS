/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
var kq=1;
function calculate(start, end) {
  for(var i=start;i<end;i++)
  {
    kq *=i;
  }
  return kq;
}
console.log(calculate(2,5));
