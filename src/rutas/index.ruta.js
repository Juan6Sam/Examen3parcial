import { Router } from "express";

import {
    compilarTask ,
    ingresar,
    compilarTaskEditar ,
    editarTask ,
    eliminarTask ,
    finalizarTask 
}
from '../control/datoscontrol';

const router = Router();
router.get('/', compilarTask);
router.post('/tasks/add', ingresar);
router.get('/edit/:id', compilarTaskEditar);
router.post('/edit/:id', editarTask);
router.get('/delete/:id', eliminarTask );
router.get('/toggleDone/:id', finalizarTask);
export default router;