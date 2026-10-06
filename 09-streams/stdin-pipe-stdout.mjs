import Transform from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform ({
    transform: function(chunk, encoding, cb) {
        const upperCased = chunk;
        console.log(upperCased);
        cb(null, upperCased)
    }
})

// // Pipe to file  
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stdout)
// process.stdin.pipe(process.stdout)