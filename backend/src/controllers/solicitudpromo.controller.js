const solicitudPromoCtrl = {};

const { poolPromise } = require("../models/database");
const moment = require("moment")


//Toma todas las solicitudes
solicitudPromoCtrl.getSolicitudes = async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query("EXEC SOLICITUDES_NOPROMO")
    res.status("200").send({ solicitudes: result.recordset });
  } catch (e) {
    res.status("204").send(e);
  }
}

//Crear una solicitud

//DATOS DEL FRONT END
solicitudPromoCtrl.createSolicitud = async (req, res) => {
  try {
    const {
      area,
      decripcion,
      encargado,
      fecha,
      nopromocion,
      id_reporte,
      id_producto,
      hora
    } = req.body
    const pool = await poolPromise
    const result = await pool.request()
    .query(`EXEC INSERTA_EN_SOLICITUD ${id_reporte},${nopromocion},'${fecha}','${hora}:00','${area}','${encargado}','${decripcion}'`)
    res.status("200").send({ solicitudes: result.recordset });
  } catch (e) {
    res.status("204").send(e);
  }
}



module.exports = solicitudPromoCtrl;