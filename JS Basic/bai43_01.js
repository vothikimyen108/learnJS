/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
const axios = require('axios');
var co = require('co');

function getData(url) {
    return axios.get(url)
        .then(function(response) {
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
}
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5',
];
// Cách 1: Sử dụng vòng lặp for
// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
//cach2
var read = co.wrap(function*(files) {
    var value = yield files.map(function(file) {
        return getData(file);
    });
    return value;
});
read(urls);
//cach1
co(function*() {
    for (var key of urls) {
        key = yield getData(key);
    }
});