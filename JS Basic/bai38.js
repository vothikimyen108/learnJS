var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
var fileConten = fs.readFileSync('./data.json');

function menu() {
    console.log("1.show all student");
    console.log("2.create new student");
    console.log("3.save and exit");
}

function loaddata() {
    students = JSON.parse(fileConten);

};

function showSudent() {
    console.log("====All Student====");
    for (var key of students) {
        console.log(key.name, key.age, key.clas);
    }
}

function creatStudent() {
    var name = readlineSync.question('what is your name?:  ')
    var age = readlineSync.question('how old are you?:  ')
    var clas = readlineSync.question('what is your class?:  ')
    var Student1 = {
        name: name,
        age: parseInt(age),
        clas: clas,
    };
    students.push(Student1);
}

function saveExit() {
    var arr1 = JSON.stringify(students);
    fs.writeFileSync('./data.json', arr1);
    boolYes = readlineSync.keyInYN('Do you want to back menu? ');
    if (boolYes) {
        showMenu();
    } else {
        process.exit();
    }
}

function showMenu() {
    menu();
    var choice = readlineSync.question('You want <1.2.3>:  ');
    switch (choice) {
        case '1':
            showSudent();
            showMenu();
        case '2':
            creatStudent();
            showMenu();
        case '3':
            saveExit();
        default:
            console.log("wrong choice");
            showMenu();
    }
}

function main() {
    loaddata();
    showMenu();
};
main();