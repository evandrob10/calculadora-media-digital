import ControllerRegister from './Controller/ControllerRegister.js';
import ControllerResult from './Controller/ControllerResult.js';

export default class Routes{

    constructor(App){
        this.App = App;
        this.initRoutes();
        this.controller = {
            result: new ControllerResult(App),
            register: new ControllerRegister(App),
        }
    }

    routesPainel(){
        this.App.get('/', async (req, res) => {
            return this.controller.result.pageResult(req, res);
        })
        this.App.get('/alunos', async (req, res) => {
            return this.controller.result.pageStudents(req, res);
        })
        this.App.get('/get-all-result', async (req, res) => {
            return await this.controller.result.getAllResult(req, res);
        })
        this.App.post('/register', async (req, res) => {
            return await this.controller.register.register(req, res);
        })
        this.App.delete('/delete', async (req, res) => {
            return await this.controller.register.delete(req, res);
        });




        
        
    }


    initRoutes(){
        this.routesPainel();
    }
}