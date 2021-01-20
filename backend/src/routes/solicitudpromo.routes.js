const { Router } = require('express');
const router = Router();

const {createSolicitud, getSolicitudes} = require('../controllers/solicitudpromo.controller')

router.route('/')
//para tomar todas las solicitudes
    .get(getSolicitudes)
//Para registrar una solicitud
    .post(createSolicitud)

module.exports = router;