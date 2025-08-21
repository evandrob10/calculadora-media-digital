//CONFIG EXPRESS
import express from "express";
const App = express();
App.use(express.static('./public'));
//CONFIG VARIVEL DE AMBIENTE
import "dotenv/config";
//CONFIG EXPRESS-HANDLEBARS
import { engine } from 'express-handlebars';
App.engine('handlebars', engine());
App.set('view engine', 'handlebars');
App.set('views', './src/views');
//Inicializar DB:
import fs from 'fs';
import { createDB } from "./src/Model/db.js";
//Verificação se banco dados está criado:
const data = fs.existsSync('db/db.json');
if (!data) createDB();


App.get('/', (req, res) => {
    res.render('pages/resultado/resultado')
});

//Server
App.listen(process.env.PORT, () => console.log(`Aplicação inicializada na url: http://localhost:${process.env.PORT}`))