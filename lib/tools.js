import fs from 'fs';
import path from 'path';
const directory = path.join(process.cwd(), 'pages/tools');

export function getToolsData() {
    const fileNames = fs.readdirSync(directory).filter(item=>item!=='index.tsx');
    return fileNames.map((fileName) => {
        const id = fileName.replace(/\.tsx$/, '');
        return {
            id,
        };
    });
}

export function getAllToolIds() {
    const fileNames = fs.readdirSync(directory);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'a'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'b'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.tsx$/, ''),
            },
        };
    });
}

