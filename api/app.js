const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Charge routes 


//Middlewares- Metodo que se ejecuta antes de que llegue al controlador
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJs'
    });
});

app.post('/pruebas', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de NodeJs'
    });
});

//exports

module.exports = app;