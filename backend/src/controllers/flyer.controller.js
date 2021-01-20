const flyerCtrl = {};

const { poolPromise } = require("../models/database");

//Guardar flyer
//FALTA PASAR PARAMETROS DEL FRONTEND
flyerCtrl.guardarFlyer = async (req, res) => {
    try {
        const {id_promocion, flyer} = req.body;
        const pool = await poolPromise
        const result = await pool.request().query(`EXEC CREA_FLYER '${flyer}',${id_promocion}`)
        res.status("200").send({ flyer: result.recordset });
    } catch (e) {
        res.status("204").send(e);
    }
}

flyerCtrl.tomarPromoConFlyer = async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`EXEC PROMOCIONES_CONFLYER`)
        res.status("200").send({ flyer: result.recordset });
    } catch (e) {
        res.status("204").send(e);
    }
}

//Tomar el flyer dependiendo del id de la promociones

flyerCtrl.getFlyer = async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`EXEC MUESTRA_FLYER ${req.params.id}`)
        res.status("200").send({ flyer: result.recordset });
    } catch (e) {
        res.status("204").send(e);
    }
}


module.exports = flyerCtrl;