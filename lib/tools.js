import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';
const directory = path.join(process.cwd(), 'tools');

export function getToolsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(directory);
    console.log('fileNames', fileNames);
    return fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.tsx$/, '');
        

        // Combine the data with the id
        return {
            id,
            title: `${id}-title`
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

export async function getToolData(id) {
    const fullPath = path.join(directory, `${id}.tsx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }