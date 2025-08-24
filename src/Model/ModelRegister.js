import fs from 'fs';

export async function insertUser(dataJson) {
    const response = {};
    try {
        fs.writeFileSync('db/db.json', dataJson);
        response.messagea = "Usuario inserido com sucesso!"
    } catch (error) {
        response.messagea = `Ocorreu error ao inserir o usuario: ${error}`
    } finally {;
        return response;
    }
}
