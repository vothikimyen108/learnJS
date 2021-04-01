const axios = require('axios');
var fs = require('fs');

function getData(url) {
    axios.get(url)
        .then(function(response) {
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
}
Promise.all([getData('https://jsonplaceholder.typicode.com/todos/1'), getData('https://jsonplaceholder.typicode.com/todos/2'), getData('https://jsonplaceholder.typicode.com/todos/3')])
    .then(function(values) {
        console.log(values);
    });

/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */