import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {Carga} from '../Carga/carga.js';
import { obtenerReportes } from '../../api/reporteVenta'


export const Reportes = props => {

    const [datos, setDatos] = useState([]);
    const [campos, setCampos] = useState({
        id_producto:'', 
        nombre_prod:'',
        cantidad_vend:'',
        total_vend:'',
        fecha_envio:''
    });
    const [cargando,setCargando] = useState(false)


    useEffect( () => {
        obtenerRep()
    }, [])


    const obtenerRep = async () => {
        setCargando(true)
        const result = await obtenerReportes();
        setDatos(result.data.reporte)
        setCargando(false)
    }

    const getDatos = (
        id_reporteVenta,
        id_producto, 
        nombre_prod,
        cantidad_vend,
        total_vend,
        fecha_envio) =>{

        setCampos(
            {
                id_reporteVenta,
                id_producto, 
                nombre_prod,
                cantidad_vend,
                total_vend,
                fecha_envio
            }
        )
    }

    if(cargando){
        return(
            <Carga/>
        )
    }
    return (
        
        <div>
            <div className="row p-5">
                <div className="col-md-7">
                    <div className="table-responsive">
                        <table className="table table-hover table-succes">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">id reporte de venta</th>
                                    <th scope="col">{props.prop1}</th>
                                    <th scope="col">{props.prop2}</th>
                                    <th scope="col">{props.prop3}</th>
                                    <th scope="col">{props.prop4}</th>
                                    <th scope="col">{props.prop5}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos ?
                                        datos.map((dato, index) => {
                                            return (
                                                <tr onClick={() => getDatos(
                                                    dato.id_reporteVenta,
                                                    dato.id_producto, 
                                                    dato.nombre_prod,
                                                    dato.cantidad_vend,
                                                    dato.total_vend,
                                                    dato.fecha_envio
                                                    ) 
                                                    }
                                                    key={index} className="table-info">
                                                    <td>{dato.id_reporteVenta}</td>
                                                    <td>{dato.id_producto}</td>
                                                    <td>{dato.nombre_prod}</td>
                                                    <td>{dato.cantidad_vend}</td>
                                                    <td>{dato.total_vend}</td>
                                                    <td>{dato.fecha_envio.substr(0, 10)}</td>
                                                </tr>
                                            )
                                        })
                                        : (
                                            <div>No hay datos</div>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card card-body">
                        <div className="form-group">
                            <label>{props.prop1}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.id_producto} name="" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop2}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.nombre_prod} name="" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop3}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.cantidad_vend} name="" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop4}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.total_vend} name="" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop5}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.fecha_envio.substr(0,10)} name="" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                        <Link to={`/gerente/SolicitudPromocion?id=${campos.id_reporteVenta}&id2=${campos.id_producto}`}><button className="btn btn-primary"type="submit"> Generar solicitud</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}