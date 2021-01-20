const promocionCtrl = {};

const {poolPromise} = require("../models/database");
const moment = require("moment")

//Crear promociones
promocionCtrl.crearPromotion= async (req,res) => {
    try {
      const {
        area,
        codigo,
        descripcion,
        id_solicitud,
        id_reporteVenta,
        nombrePromocion,
        cantidadProd,
        descuento
      } = req.body
        const pool = await poolPromise
        const result1 = await pool.request()
        .query(`SELECT id_producto FROM ReporteDeVenta WHERE id_reporteVenta=${id_reporteVenta}`)
        const id_producto = result1.recordset[0].id_producto
        const result = await pool.request()
        .query(`EXEC CREA_PROMOCION ${id_solicitud},'${id_producto}','${nombrePromocion}','${descripcion}', ${cantidadProd},${descuento},'${codigo}','${area}',0`)
        res.status("200").send({promociones: result.recordset});
      } catch (e) {
        res.status("204").send(e);
      }
}

//Aprobar promocion
promocionCtrl.aprobarPromocion= async (req,res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`EXEC APROBAR ${req.params.id}`)
        res.status("200").send({promociones: result.recordset});
      } catch (e) {
        res.status("204").send(e);
      }

}

//Denegar promocion
promocionCtrl.denegarPromocion= async (req,res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request()
    .query(`EXEC DESAPROBAR ${req.params.id}`)
    res.status("200").send({promociones: result.recordset});
  } catch (e) {
    res.status("204").send(e);
  }
}


//Tomar promociones aprobadas
promocionCtrl.getPromocionAprobada = async (req,res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query("EXEC VER_HABILES")
        res.status("200").send({promociones: result.recordset});
      } catch (e) {
        res.status("204").send(e);
      }
}
promocionCtrl.getPromocionAprobadaHabilitada= async (req,res) => {
  try {
      const pool = await poolPromise
      const result = await pool.request().query("EXEC VER_HABILITADAS")
      res.status("200").send({promociones: result.recordset});
    } catch (e) {
      res.status("204").send(e);
    }
}

//Toma todas las promociones
promocionCtrl.getPromocion= async (req,res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query("EXEC MOSTRAR_PROMOCIONES")
        res.status("200").send({promociones: result.recordset});
      } catch (e) {
        res.status("204").send(e);
      }
}


promocionCtrl.habilitarPromocion = async (req, res) => {
  try {
    const { 
      id,
      fechaInicio,
      fechaTerminacion
    } = req.body;
    const pool = await poolPromise
    const result = await pool.request().query(`EXEC HABILITA_PROMOCION '${fechaInicio}','${fechaTerminacion}',${id}`)
    res.status("200").send({promociones: result.recordset});
  } catch (e) {
    res.status("204").send(e);
  }
}

module.exports = promocionCtrl;