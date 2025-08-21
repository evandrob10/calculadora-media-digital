import { getAllData } from '../Model/db.js';

export default class ControllerResultado {
    constructor(App) {
        this.App = App;
        this.routes();
    }

    routes() {
        this.App.get('/', (req, res) => {
            res.render('pages/resultado/resultado');
        })
        this.App.get('/alunos', async (req, res) => {
            const data = await getAllData();
            if (data) res.render('pages/alunos/alunos', { response: data });
            else res.render('pages/alunos/alunos', { message: 'Nenhum aluno cadastrado!' })
        })
    }

}