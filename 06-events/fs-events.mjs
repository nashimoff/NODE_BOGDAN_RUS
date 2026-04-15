import { EventListener } from "events";
import fs from "fs";

const fileEmitter = new EventListener();

fileEmitter.on("writeComplete", () => {
  console.log("File first.txt was written");
  fs.appendFile("./first.txt", "\nOne more line", () => {
    fileEmitter.emit('appendComplete')
  });
});

fileEmitter.on('appendComplete', () => {

})


fs.writeFile("./first.txt", "First file text", () => {
    fileEmitter.emit('writeComplete')
});


fs.rename("./first.txt", "./renamed-first.txt");
console.log("File was renamed");
