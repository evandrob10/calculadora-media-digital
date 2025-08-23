//CONTROLLES
import Controller from './Controller.js';
//MODEL
import { getAllData } from '../Model/ModelResult.js';

export default class ControllerRegister extends Controller {
    //ROUTAS CADASTRO
    routes() {
        this.App.post('/register', async (req, res) => {
            const nameUser = req.body.name;
            const allData = await getAllData();
            if (allData && nameUser) {
                allData.push({
                    id: (allData.length + 1),
                    name: nameUser,
                    media: false,
                });
                console.log(allData);
            };
        });
    };
};