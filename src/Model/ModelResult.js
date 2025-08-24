import fs from 'fs';

export async function getAllData() {
    const response = fs.readFileSync('db/db.json', 'utf-8');
    return response ? JSON.parse(response) : false;
}