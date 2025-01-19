const fs = require('fs/promises');
const path = require('path');
const filesCSS = './05-merge-styles/styles';
const outputFileCSS =  path.join(__dirname, './project-dist/bundle.css');

async function createFilesFolder() {
    try {
        // Читаем файлы из текущей директории
        const files = await fs.readdir(filesCSS);
        const cssFilesContents = [];

        for (const file of files) {
            const filePath = path.join(filesCSS, file);
            
            const fileStats = await fs.stat(filePath);

            // Проверяем, что это файл и его расширение .css
            if (fileStats.isFile() && path.extname(file) === '.css') {
                const content = await fs.readFile(filePath, 'utf-8');
                cssFilesContents.push(content); // Добавляем содержимое файла в массив
            }
        }

        // Объединяем содержимое всех CSS файлов
        const bundleContent = cssFilesContents.join('\n'); // Объединяем с разделителем новой строки

        // Записываем объединенное содержимое в bundle.css
        await fs.writeFile(outputFileCSS, bundleContent);
        console.log('bundle.css успешно создан');

    } catch (error) {
        console.error('Ошибка:', error);
    }
} createFilesFolder();