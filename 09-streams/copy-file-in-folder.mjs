import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// const sourceDir = "./files";
// const destinationDir = "./copied-files";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, "files");
const destinationDir = path.join(__dirname, "copied-files");

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist!`);
  console.log("Exiting...");
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir);
//   console.log("Destination dir removed");
}
// fs.mkdir(destinationDir);
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(fileNames)
})