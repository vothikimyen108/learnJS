/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
//for in dùng trong object
//for of dùng trong mảng
//vd for in
var dog = {
    name: 'meo',
    age: 1,
    width: 3,
}
for(var key in dog)
{
    console.log(dog[key]);
};
//vf for of
var arr = [1,4,5];
for(var key of arr)
{
    console.log(key);
};