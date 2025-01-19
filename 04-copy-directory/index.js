const fs = require('fs/promises');
const path = require('path');
const copiedPath = './files-copy';
const currentPath = './files'


fs.mkdir(path.join(__dirname, 'files-copy'),
    { recursive: true },
    (err) => {
        if (err) {
            return console.error(err);
        }
    }); 
    async function FolderCopied () {
try {
        await fs.rm(copiedPath, { recursive: true, force: true });

        await fs.mkdir(copiedPath, { recursive: true });

        const files = await fs.readdir(currentPath);
        for (const file of files) {
            const fileName = path.basename(file);
            const curFilePath = path.join(currentPath, fileName)
            const copFilePath = path.join(copiedPath, fileName)
            fs.copyFile(curFilePath, copFilePath)

        }
    } catch (error) {
        console.error('Error,', error);
    }
}
FolderCopied ()
