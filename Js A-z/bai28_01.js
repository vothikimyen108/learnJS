var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function loadData() {
    var fileConten = fs.readFileSync('./data.json');
    students = JSON.parse(fileConten);
}

function showStudent() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function createStudent() {
    var name = readlineSync.question('what your name ?> ');
    var age = readlineSync.question('old ?> ');
    var student = {
        name: name,
        age: parseInt(age),
    }
    students.push(student);
}

function saveExit() {
    var conten = JSON.stringify(students);
    fs.writeFileSync('./data.json', conten, 'utf8');
}

function showMenu() {
    console.log('1.Showstudent');
    console.log('2.create new student');
    console.log('3.Save and exit');
    var option = readlineSync.question('Do you want this option? > ');
    switch (option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            createStudent();
            showMenu();
            break;
        case '3':
            saveExit();
            break;
        default:
            console.log('wrong choice');
            showMenu();
            break;
    }
}

function main() {
    loadData();
    showMenu();
}
main();