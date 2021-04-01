var Mouse = require('./mouse');
var readlineSync = require('readline-sync');

function Cat(name) {
    this.name = name;
    this.stomach = [];
    this.dead = false;
}
var m1 = new Mouse('red');
var m2 = new Mouse('blue');
var m3 = new Mouse('black');
var m4 = new Mouse('green');
Cat.prototype.eta = function(mouse) {
    this.stomach.push(mouse);
    mouse.die();
};
Cat.prototype.die = function() {
    this.dead = true;
};

function ran() {
    var k;
    k = Math.random() * 4;
    return (Math.ceil(k));
};

function startGame() {
    console.log("Chào mừng bạn đến với gamexamxi: Giả sử bạn là một con mèo hãy đặt tên cho mình nào :>");
    var catName = readlineSync.question('WHAT IS YOUR NAME? ');
    console.log("hi! " + catName);
    var userCat = new Cat(catName);
    console.log("Nhân vật của bạn: ")
    console.log("This is: " + catName);
    console.log(userCat);
    console.log("Luật: Bạn là 1 con mèo đói chúng ta có 4 con chuột bạn chỉ được ăn 3 con  ăn được con chuột lucky sẻ win ngược lại quá 3 con bạn bị thua");
    console.log("====Quy ước===");
    console.log("1. Chuột red là số 1");
    console.log("2. Chuột blue là số 2");
    console.log("3. Chuột black là số 3");
    console.log("4. Chuột green là số 4");
    var arr = [m1, m2, m3, m4];
    var cout = 0;
    do {
        cout++;
        var choice = readlineSync.question('Choose the mouse you want to eat? ');
        userCat.eta(arr[choice - 1]);
        console.log(userCat);
        if (choice == ran()) {
            console.log("==============YOU WIN==============");
            console.log("Mouse luck: ");
            console.log(arr[choice - 1]);
            break;
        }
        if (cout === 3) {
            console.log("==============YOU LOST==============");
            userCat.die();
            console.log(userCat);
        }
    } while (cout < 3);
}
do {
    boolYes = readlineSync.keyInYN('Do you want to play the game again? ');
    if (boolYes) {
        startGame();
    } else {
        process.exit();
    }
} while (boolYes === true);