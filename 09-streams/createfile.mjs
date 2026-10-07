// How to run program: node createfile.mjs <filename> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])
if (isNaN(linesQty)) {
    console.log('Lines qty must be a number')
    process.exit(0)
}