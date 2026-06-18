const path = require("path");

const filePath = "E:\\COURSES\\NODE_BOGDAN_RUS\\07-path\\index.js";
const textFilePath = "E:\\COURSES\\NODE_BOGDAN_RUS\\file.txt";
const relativePath = ".\\NODE_BOGDAN_RUS\\movie.mov";
const directoryPath = ".\\NODE_BOGDAN_RUS\\subfolder";

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // E:\COURSES\NODE_BOGDAN_RUS\07-path
console.log(path.dirname(directoryPath)); //.\NODE_BOGDAN_RUS

console.log(path.resolve(relativePath)); //E:\COURSES\NODE_BOGDAN_RUS\NODE_BOGDAN_RUS\movie.mov

console.log(path.extname(textFilePath)); //.txt
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.msj`));
// E:\COURSES\NODE_BOGDAN_RUS\07-path\renamed-index.msj