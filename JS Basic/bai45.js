function doAfter(fn, ms) {
    var promise = new Promise(function(resovle, reject) {
        setTimeout(function(data) {
            fn();
            resovle(data);
        }, ms);
    });
    return promise;
}

function sayHello() {
    console.log('Hello');
}

function sayGoodbye() {
    console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);

// Expect: 
// Đợi 1s
// Hello
// Goodbye