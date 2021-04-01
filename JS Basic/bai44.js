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
async function run() {
    var song1 = await readFilepromise('song1.txt');
    var song2 = await readFilepromise('song2.txt');
    return [song1, song2]
};
run().then(function(value) {
    console.log(value);
})