import ControllerRegister from './Controller/ControllerRegister.js';
import ControllerResult from './Controller/ControllerResult.js';

export default class Routes{

    constructor(App){
        this.App = App;
        this.initRoutes();
    }

    routesPainel(){
        new ControllerRegister(this.App);
        new ControllerResult(this.App);
    }

    initRoutes(){
        this.routesPainel();
    }
}