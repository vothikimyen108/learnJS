//co module để viết async code gọn gàng hơn
//cách 1
var fs = require('promise-fs');
var fs = require('fs');
var co = require('co');

function readFilepromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};
/*
//cach 1
co(function*() {
        var read = yield readFilepromise('song1.txt');
        var read1 = yield readFilepromise('song2.txt');
        return [read, read1]
    }).then(function(song1) {
        console.log(song1);
    }).catch(function(err) {
        console.log(err);
    })*/
//cah2
//If you want to convert a co-generator-function into a regular function that returns a promise, you now use co.wrap(fn*).
var read = co.wrap(function*(files) {
    var value = yield files.map(function(file) {
        return readFilepromise(file);
    });
    return value;
});
read(['song1.txt', 'song2.txt'])
    .then(function(song1) {
        console.log(song1);
    }).catch(function(err) {
        console.log(err);
    })