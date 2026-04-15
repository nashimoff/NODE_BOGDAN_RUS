import { EventListener } from "events";
import fs from "fs";

const fileEmitter = new EventListener();

fileEmitter.on("writeComplete", () => {
  console.log("File first.txt was written");
  fs.appendFile("./first.txt", "\nOne more line", () => {});
});

fs.writeFile("./first.txt", "First file text", () => {
    fileEmitter.emit('writeComplete')
});

console.log("Appended text to the first.txt file");
fs.rename("./first.txt", "./renamed-first.txt");
console.log("File was renamed");
