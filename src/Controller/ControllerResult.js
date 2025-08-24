//CONTROLLERS:
import Controller from './Controller.js';
//MODEL:
import { getAllData } from '../Model/ModelResult.js';

export default class ControllerStudents extends Controller {

    pageResult(req, res) {
        res.render('pages/resultado/resultado');
    }

    async pageStudents(req, res) {
        const data = await getAllData();
        if (data) res.render('pages/alunos/alunos', { response: data });
        else res.render('pages/alunos/alunos', { message: 'Nenhum aluno cadastrado!' })
    }

    async getAllResult(req, res) {
        const data = async () => {
            const response = await getAllData();
            const data = response ? response : { message: 'error ao resgatar os dados!' };
            res.json(data);
        }
        data();
    }

}