var fs = require("fs");
fs.writeFile("test.txt", "\uFEFF" + content, function cb(err) {
    console.log("ok");
});