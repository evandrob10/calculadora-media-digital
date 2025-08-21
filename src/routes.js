import InitApi from './Api/initApi.js';
import ControllerResultado from './Controller/ControllerResultado.js';


export default class Routes{

    constructor(App){
        this.App = App;
        this.initRoutes();
        new InitApi(App);
    }

    routesPainel(){
        new ControllerResultado(this.App);
    }

    initRoutes(){
        this.routesPainel();
    }
}