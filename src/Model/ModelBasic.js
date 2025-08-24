import fs from 'fs';

export function createDB() {
    fs.writeFile('db/db.json', '', (error) => {
        if (error) {
            console.log('Error ao criar banco de dados: ', error);
        } else {
            console.log('Banco de dados criado com sucesso.');
        }
    })
}
