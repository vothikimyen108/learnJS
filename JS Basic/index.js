var readlineSync = require('readline-sync');
 // Wait for user's response.
var stomach = [];
var eat = readlineSync.question('What’s to eat? ');
stomach.push(eat);
console.log(stomach);
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  var userName = readlineSync.question('What is your name?')
  console.log('Oh, ' + userName + ' loves ' + favFood + '!');
 