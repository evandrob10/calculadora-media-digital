
export default class ControllerResultado {
    constructor(App) {
        this.App = App;
        this.routes();
    }

    routes() {
        //Routa resultado:
        this.App.get('/', (req, res) => {
            res.render('pages/resultado/resultado');
        })
    }

}