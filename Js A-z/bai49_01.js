var classse = [{ id: 0, name: 'A1', teacher: 1 }, { id: 1, name: 'A2', teacher: 1 }, { id: 2, name: 'A3', teacher: 2 }]; //cach1
var teacher = [{ id: 0, name: 'yen', age: 20 }, { id: 1, name: 'thanh', age: 21 }, { id: 2, name: 'vy', age: 20 }];
var students = [{ id: 0, name: 'vit', class: 0 }, { id: 1, name: 'meo', class: 0 }, { id: 3, name: 'tin', class: 1 }]; //cach2class
function getStudent(nameClass) {
    var getclass = classse.find(function(x) {
        return x.name === nameClass;
    });
    var kq = students.filter(function(x) {
        return x.class === getclass.id;
    })
    return kq;
}
console.log(getStudent('A2'));