const fs = require ('fs');
const readLine = require ('readline');
const path = require('path');
const text = path.join(__dirname, './text.txt');
let isSigint = false;

const userUnput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const createFile = async () => {
    await fs.writeFile (text,'', (err)=>{console.log(err)});
}
const safeIntFile = async (input) => {
    await fs.appendFile(text, input + ' ', (err)=>{console.log(err)});
    };


 const main = async() => {
    await createFile ();
    console.log ("Please, inter anything or inter 'exit' for going out:");
    userUnput.on ('line', async (input) => {
        if (input.trim().toLowerCase() === 'exit' || isSigint) {
            console.log ("Writing is ended")
            userUnput.close();
            isSigint = false;
        } else {
            await safeIntFile(input);
        }
    })
 }

 main().catch(err =>
    console.error('incorrect', err)
 );
    
    
 