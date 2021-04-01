/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */var rectangle = {
    width: 4,
    height: 5,
    getWidth: function(){ 
        console.log(this.width);
    },
    getHeight: function(){ 
        console.log(this.height);
    },
    getArea: function()
    {
        console.log(this.width*this.height);
    }
 };
 rectangle;
 rectangle.getWidth();
 rectangle.getHeight();
 rectangle.getArea();