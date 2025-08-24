import fs from 'fs';

export async function insertUser(dataJson) {
    const response = {};
    try {
        fs.writeFileSync('db/db.json', dataJson);
        response.message = "Usuario inserido com sucesso!"
    } catch (error) {
        response.message = `Ocorreu error ao inserir o usuario: ${error}`
    } finally {;
        return response;
    }
}

export async function insertMedia(dataJson){
    const response = {};
    try {
        fs.writeFileSync('db/db.json', dataJson);
        response.message = "Média inserida com sucesso!"
    } catch (error) {
        response.message = `Ocorreu error ao inserir a média: ${error}`
    } finally {;
        return response;
    }
}

export async function deleteUser(dataJson) {
    const response = {};
    try {
        fs.writeFileSync('db/db.json', dataJson);
        response.message = "Usuario deletado com sucesso" 
    } catch (error) {
        response.message = `Ocorreu error ao deletar o usuario: ${error}`
    } finally {
        return response;
    }
}
