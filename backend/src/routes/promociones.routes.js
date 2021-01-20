const {Router} = require('express')
const router = Router();

const {getPromocion,getPromocionAprobada,crearPromotion,aprobarPromocion,denegarPromocion,habilitarPromocion,getPromocionAprobadaHabilitada} = require('../controllers/promociones.controller');

router.route('/')
//para tomar todas las promociones
    .get(getPromocion)
//Para registrar una promocion
    .post(crearPromotion)

router.route('/aprobadas')
    .get(getPromocionAprobada)
    .post(habilitarPromocion)

router.route('/aprobadas/habilitadas')
    .get(getPromocionAprobadaHabilitada)
    

//UPDATE para aprobar una promocion
router.route('/aprobar/:id')
    .put(aprobarPromocion)

//UPDATE para desaprobar una promocion
router.route('/desaprobar/:id')
    .put(denegarPromocion)






module.exports = router;