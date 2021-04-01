var readlineSync = require('readline-sync');
var contacts = [];
var fs = require('fs');
var fileConten = fs.readFileSync('./data.json', { encoding: 'utf8' });
var clear = require('clear');

function menu() {
    console.log("1.show all contact");
    console.log("2.create new contact");
    console.log("3.remane a contact");
    console.log("4.delete a contact");
    console.log("5.Find a contact");
    console.log("6.save or exit");
}

function showContact() {
    console.log("======Contact======");
    var count = 0;
    for (var key of contacts) {
        count++;
        console.log(count + "  " + key.name + " " + key.phone);
    }
}

function loadData() {
    contacts = JSON.parse(fileConten);
};

function createContact() {
    console.log('======Create A Contact======')
    var name = readlineSync.question('input name ');
    var phone = readlineSync.question('what is the number?: ');
    var contact = {
        name: name.toLocaleLowerCase(),
        phone: Number(phone),
    }
    boolYes1 = readlineSync.keyInYN('Do you want save? ');
    if (boolYes1) {
        contacts.push(contact);
        var arr1 = JSON.stringify(contacts);
        fs.writeFileSync('./data.json', arr1, { encoding: 'utf8' });
    } else {
        showMenu();
    }
}

function remaneContact() {
    var callname = checkname();
    var rename = readlineSync.question('Who is that?: ');
    var rephone = readlineSync.question('what is the number?: ');
    boolYes1 = readlineSync.keyInYN('Do you want save? ');
    if (boolYes1) {
        for (var key of contacts) {
            if (key.name === callname) {
                key.name = rename;
                key.phone = rephone;
            }
        }
        var arr1 = JSON.stringify(contacts);
        fs.writeFileSync('./data.json', arr1);
    } else {
        showMenu();
    }
}

function checkname() {
    var callname = readlineSync.question('Who is change that?: ');
    var key = findContactName(callname);
    if (typeof key === 'undefined') {
        console.log("not key");
        boolYes = readlineSync.keyInYN('Do you want change key again? ');
        if (boolYes) {
            checkname();
        } else {
            showMenu();
        }

    } else
        return callname;
}

function deleteContact() {
    var callname = checkname();
    var Delete;
    for (var key of contacts) {
        if (key.name === callname)
            Delete = key;
    }
    boolYes1 = readlineSync.keyInYN('Do you want save? ');
    if (boolYes1) {
        contacts.pop(Delete);
        var arr1 = JSON.stringify(contacts);
        fs.writeFileSync('./data.json', arr1);
    } else {
        showMenu();
    }
}

function findContactName(callname) {
    var findName = callname.toLocaleLowerCase();
    var Find = contacts.find(function(obj) {
        if (obj.name === findName) {
            return obj;
        }
    })
    return Find;
}

function findContactPhone(callphone) {
    var x = callphone;
    var Find = contacts.find(function(obj) {
        var xc = String(obj.phone);
        var xn = parseInt(xc.length / 2);
        var y = (xc.slice(0, xn));
        var y1 = Number(y);
        console.log(y);
        if ((obj.phone == x) || x == y1) {
            return obj;
        }
    });
    return Find;
}

function findContact() {
    var k = readlineSync.question('input name or phone? ');
    var a;
    var kq;
    if (isNaN(k)) {
        a = k;
    } else
        a = Number(k);
    if (typeof a === 'number') {
        kq = showFind(findContactPhone(a));
    }
    if (typeof a === 'string') {
        kq = showFind(findContactName(a));
    }
}

function showFind(obj) {
    if (typeof obj === 'undefined') {
        console.log("not key");
        boolYes = readlineSync.keyInYN('Do you want find key again? ');
        if (boolYes) {
            findContact();
        } else {
            showMenu();
        }
    } else {
        console.log(obj.name + " " + obj.phone);
    }
}

function saveExit() {
    var arr1 = JSON.stringify(contacts);
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
    var choice = readlineSync.question('>:  ');
    switch (choice) {
        case '1':
            showContact();
            showMenu();
        case '2':
            createContact();
            showMenu();
        case '3':
            remaneContact();
            showMenu();
        case '4':
            deleteContact();
            showMenu();
        case '5':
            findContact();
            showMenu();
        case '6':
            saveExit();
        default:
            console.log("wrong choice");
            showMenu();
    }
}

function main() {
    loadData();
    showMenu();
};
main();
/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */