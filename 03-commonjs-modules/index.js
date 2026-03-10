const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const { myName: myOtherName, myFriendsName} = require('./export-and-import')
const greetingFn = require('./single-export');
// // DON'T USER ABSOLUTE PATHS
// const greetingFn = require('c:\\Users\\n.ashimov\\Downloads\\COURSES\\COURSES\\Node\\03-commonjs-modules\\single-export.js') 

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

console.log(greetingFn);
greetingFn(myName);

console.log(myOtherName)
console.log(myFriendsName)