const fs = require('fs/promises');
const path = require('path');
const dirPath = './03-files-in-folder/secret-folder';

async function readFolderFiles (folder) {
    try {
        const dirents = await fs.readdir(folder, {withFileTypes:true});
        for (const dirent of dirents) {
            if(dirent.isFile()) {
                const fileName = dirent.name;
                const filePath = path.join(folder, fileName);
                const fileStats = await fs.stat(filePath);
                const fileExtension = path.extname(fileName)
                
                const fileSize = fileStats.size;
                const NewFileName = path.basename(fileName, fileExtension)

                console.log (`${NewFileName} ${fileExtension} ${fileSize}B`);
            }
        }
    } catch (error) {
        console.error('Error,', error);
    }
}
readFolderFiles(dirPath)