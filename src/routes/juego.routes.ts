import {Router} from 'express';


//Obtengo las funciones del controlador
import {getAll} from '../controllers/juego.controller';


const router = Router();


//Defino nombres de las rutas, 
router.get('/getAll',getAll);

export default router;