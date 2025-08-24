//CONTROLLES
import Controller from './Controller.js';
//MODEL
import { getAllData } from '../Model/ModelResult.js';
import { insertUser, deleteUser } from '../Model/ModelRegister.js';

export default class ControllerRegister extends Controller {
    //ROUTAS CADASTRO
    routes() {
        this.App.post('/register', async (req, res) => {
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
        });
        this.App.delete('/delete', async (req, res) => {
            const idUser = req.query.id
            const allData = await getAllData();
            const newAllData = allData.filter((value) => value.id != idUser);
            if (newAllData) return res.jsonp(await deleteUser(JSON.stringify(newAllData)));
            res.jsonp({
                message: "Error ao deletar o usuario.",
            })
        });
    };
}