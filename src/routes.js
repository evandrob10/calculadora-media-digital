import ControllerStudents from './Controller/ControllerStudents.js';
import ControllerResult from './Controller/ControllerResult.js';

export default class Routes{

    constructor(App){
        this.App = App;
        this.initRoutes();
        this.controller = {
            result: new ControllerResult(App),
            students: new ControllerStudents(App),
        }
    }

    routesPainel(){
        this.App.get('/', async (req, res) => {
            return this.controller.result.pageResult(req, res);
        })

        this.App.get('/get-all-result', async (req, res) => {
            return await this.controller.result.getAllResult(req, res);
        })
        //MODULE ALUNO
        this.App.get('/aluno', async (req, res) => {
            return this.controller.result.pageStudents(req, res);
        })
        this.App.post('/aluno', async (req, res) => {
            return await this.controller.students.register(req, res);
        })
        this.App.post('/aluno/media/:id', async (req, res) =>{
            return await this.controller.students.media(req,res);
        })
        this.App.delete('/aluno', async (req, res) => {
            return await this.controller.students.delete(req, res);
        });  
    }


    initRoutes(){
        this.routesPainel();
    }
}