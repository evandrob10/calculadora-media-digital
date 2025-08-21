import { getAllData } from '../Model/db.js';
export default class Resultado {
    constructor(App) {
        this.App = App;
        this.routes();
    }

    routes() {
        //Routa resultado:
        this.App.get('/api/get-all-resultado', (req, res) => {
            const data = async () => {
                const response = await getAllData();
                const data = response ? response : { message: 'error ao resgatar os dados!'};
                res.json(data);
            }
            data();
        })
    }

}