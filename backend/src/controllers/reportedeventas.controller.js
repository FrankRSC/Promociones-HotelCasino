const reportedeventasCtrl = {};

const {poolPromise} = require("../models/database");
const moment = require("moment")

//VER REPORTE DE VENTAS
reportedeventasCtrl.getReportes = async (req,res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query("EXEC MOSTRAR_REPORTEVENTAS")
        res.status("200").json({reporte: result.recordset});
      } catch (e) {
        res.status("204").send(e);
      }
}

//VER REPORTE DE VENTAS
reportedeventasCtrl.getEventos = async (req,res) => {
  try {
      const pool = await poolPromise
      const result = await pool.request().query("EXEC MOSTRAR_EVENTOS")
      res.status("200").json({reporte: result.recordset});
    } catch (e) {
      res.status("204").send(e);
    }
}

//INSERTAR REPORTE DE VENTAS
//FALTAN PARAMETROS DEL FRONTEND
reportedeventasCtrl.crearReporte = async (req,res) => {
  try {
    const{
      id_producto,
      nombre_prod,
      cantidad_vend,
      total_vend,
      fecha_envio
    } = req.body;
      const pool = await poolPromise
      const result = await pool.request().query("EXEC INSERTA_REPORTE_VENTA 'S27','Espagueti',23,300,'2020-03-01'")
      res.status("200").json({reporte: result.recordset});
    } catch (e) {
      res.status("204").send(e);
    }
}



module.exports = reportedeventasCtrl;