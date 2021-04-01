/*
var i = 0;
var intervalID = setInterval(function() {
    i++;
    console.log(i);
    if (i === 10)
        clearInterval(intervalID);
}, 1000);*/
function countFrom(a, b) {
    return new Promise(function(resole, reject) {
        var intervalID = setInterval(function() {
            console.log(a);
            a++;
            if (a === b) {
                console.log(a);
                clearInterval(intervalID);
                resole(a);
            }
        }, 1000);
    });
}
countFrom(1, 10).then(function(data) {
    console.log("done ");
});