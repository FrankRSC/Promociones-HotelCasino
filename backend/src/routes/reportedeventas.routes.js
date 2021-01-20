const { Router } = require('express');
const router = Router();

const {getReportes,crearReporte, getEventos} = require('../controllers/reportedeventas.controller')

router.route('/')
//para tomar todos los reportes de venta
    .get(getReportes)
    .post(crearReporte)

router.route('/eventos')
    //para tomar todos los reportes de venta
        .get(getEventos)
    


module.exports = router;