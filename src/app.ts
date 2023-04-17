/* Librerias propias de Node */
import express from 'express';
import cors from 'cors'
/* Fin Librerias propias de Node */

/* Importando las rutas creadas */
import juegoRoutes from   './routes/juego.routes';
/* Fin Importando rutas creadas */


const app = express();
app.use(cors());
//Paso esta funcion para que express entienda cuando se le envia un Json, limit sirve para evitar el error too large (413)
//app.use(express.json({limit: '50mb'}));

/* *********** MUY IMPORTANTE DEFINIRLO ANTES DE LLAMAR A LAS RUTAS PARA HABILITAR EL CORS */
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    next();
});
app.set('Access-Control-Allow-Origin', '*');


app.use(juegoRoutes);

export default app; 