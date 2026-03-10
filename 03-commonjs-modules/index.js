const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreathobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');
// // DON'T USER ABSOLUTE PATHS
// const greetingFn = require('c:\\Users\\n.ashimov\\Downloads\\COURSES\\COURSES\\Node\\03-commonjs-modules\\single-export.js') 

//Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in the multiple-exports module!
myHobbies.push('climbing');

//Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-import 
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);