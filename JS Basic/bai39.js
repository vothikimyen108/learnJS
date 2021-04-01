const axios = require('axios');

// Make a request for a user with a given ID
var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';

function getData() {
    axios.get(url1)
        .then(function(response) {
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
    axios.get(url2)
        .then(function(response) {
            console.log(response.data);
        }).catch(function(err) {
            console.log(err);
        });
}
getData()