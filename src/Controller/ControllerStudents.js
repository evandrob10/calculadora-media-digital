//CONTROLLES
import Controller from './Controller.js';
//MODEL
import { getAllData } from '../Model/ModelResult.js';
import { insertUser, deleteUser, insertMedia } from '../Model/ModelStudents.js';

export default class ControllerRegister extends Controller {

    async register(req, res) {
        const nameUser = req.body.name;
        const allData = await getAllData();
        if (allData && nameUser) {
            allData.push({
                id: (allData[allData.length - 1] ? allData[allData.length - 1].id + 1 : 1),
                name: nameUser,
                media: false,
            });
            const response = await insertUser(JSON.stringify(allData));
            res.jsonp(response);
        };
    }

    async calulateMedia(notas){
        const sum = notas.reduce((accumulator, valueCurrent)=> accumulator + valueCurrent);
        return sum / 4;
    }

    async updateMedia(idUser, media){
        const allData = await getAllData();
        if(idUser && media){
            allData[idUser - 1].media = media;
            return await insertMedia(JSON.stringify(allData));
        };
        return {
            message: "Error ao atualizar media",
        };
    }

    async media(req, res) {
        const data = req.body;
        if(data){
            const notas = [];
            for(const nota in data) {
                if(!parseFloat(data[nota]) || parseFloat(data[nota]) > 10 || parseFloat(data[nota]) < 0) {
                    notas.push(0);
                    continue;
                }
                notas.push(parseFloat(data[nota]));
            }
            if(notas.length < 4) 
                for(let count = notas.length; count < 4; count++) notas.push(0);
            const idUser = req.params.id;
            const media = await this.calulateMedia(notas);
            await this.updateMedia(idUser, media);
        }
        res.redirect('/aluno');
    }



    async delete(req, res) {
        const idUser = req.query.id
        const allData = await getAllData();
        const newAllData = allData.filter((value) => value.id != idUser);
        if (newAllData) return res.jsonp(await deleteUser(JSON.stringify(newAllData)));
        res.jsonp({
            message: "Error ao deletar o usuario.",
        })
    }
}