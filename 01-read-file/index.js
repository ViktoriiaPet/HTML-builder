let fs = require('fs');
const path = require("path");
const readStream = fs.createReadStream('./01-read-file/text.txt');
readStream.pipe(process.stdout);

readStream.on('error', (err) => {
    console.error('Ошибка при чтении файла:', err);
});

