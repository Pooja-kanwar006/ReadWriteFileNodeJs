// reading and writing a file using nodejs
const fs = require("fs");
fs.writeFile("massage.txt", "this is a msg", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// now time to read the file
const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function logFile() {
    try {
        const filePath = resolve('massage.txt');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}
logFile();