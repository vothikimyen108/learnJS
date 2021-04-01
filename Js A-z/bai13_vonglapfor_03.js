var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
//cach 1
/*
var j=a.length-1;
for(var i=0;i<=a.length/2;i++)
{
    var tam=a[i];
    a[i]=a[j-i];
    a[j-i]=tam;
}
for(var i=0;i<a.length;i++)
{
    console.log(a[i]);
}*/
console.log("============================")
//cach 2
for(var j=a.length-1;j>=0;j--)
{
    console.log(a[j]);
}