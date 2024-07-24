import * as fs from 'fs';
import Read from '../Interfaces/read-interface';

async function readFromFile(filePath: string): Promise<Read> {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        const interData: Read= JSON.parse(data);
        return interData
    } catch (error) {
        console.error('Error reading file:', error);
        throw new Error('Error reading file: ${error.message}');
    }
}

export default readFromFile;