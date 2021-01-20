const {Router} =  require('express');
const router = Router();

const {guardarFlyer,getFlyer,tomarPromoConFlyer} = require('../controllers/flyer.controller');

router.route('/')
//Paara registrar un flyer
    .post(guardarFlyer)
    .get(tomarPromoConFlyer)

router.route('/promocion:id')
    .get(getFlyer)


module.exports = router;