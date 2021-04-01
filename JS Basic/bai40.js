/*var fs = require('promise-fs')

function onDone(song) {
    console.log(song);
}

function onErr(err) {
    console.log(err);
}

function readFile(path) {
    return fs.readFile(path, 'utf8')
}
readFile('song1.txt')
    .then(onDone)
    .then(function() {
        return readFile('song2.txt')
    })
    .then(onDone)
    .catch(onErr);*/
/*
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}
readFilePromise('song2.txt')
    .then(function(song1) {
        console.log(song1);
    })
    .then(function() {
        return readFilePromise('song1.txt')
    })
    .then(function(song1) {
        console.log(song1)
    })
    .catch(function(err) {
        console.log(err);
    })*/
var request = require('request');
var fs = require('fs');
/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */
/*
console.log('Start fetching...');

request('https://jsonplaceholder.typicode.com/todos/1', function(error, response, body) {
    if (error !== null) {
        console.log('error:', error); // Print the error
    }
    console.log('Done:', body);
});

console.log('Nothing');
*/
url = 'https://jsonplaceholder.typicode.com/todos/1';

function Load(path) {
    return new Promise(function(resolve, reject) {
        request('https://jsonplaceholder.typicode.com/todos/1', function(error, response, body) {
            if (error !== null) {
                reject(error) // Print the error
            } else {
                resolve(body)
            }
        });
    })
}

Load(url)
    .then(function(body) {
        console.log('Done', body);
    })
    .catch(function(err) {
        console.log(err);
    });
/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */