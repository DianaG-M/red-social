const mongoose = require('mongoose');
const app = require('./app');
const port = 3002;


//Conection DataBase
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/red_social', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a la base de datos se ha realizado');

        //Crear servidor 
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:', port);
        });
    })
    .catch(err => console.log(err));