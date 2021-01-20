import React, { useState, useEffect } from 'react'
import './css/habilitar.css'
import {Carga} from '../Carga/carga.js';
import { obtenerPromocionesHabiles,HabilitarPromocion } from '../../api/habilitarPromo'

export const Habilitar = props => {

    const [datos, setDatos] = useState([]);
    const [campos, setCampos] = useState({
        id_promocion:'', 
        nombreProm:'',
        area:'',
        infoPromocion:'',
        codigoPromo:''
    });
    const [cargando,setCargando] = useState(false)


    const [fechas,setFechas] = useState([]);

    useEffect( () => {
        obtenerPromocionH();
    }, [])

    const obtenerPromocionH = async () => {
        //aqui va el de habilitar promociones
        setCargando(true)
        const result = await obtenerPromocionesHabiles();
        setDatos(result.data.promociones)
        setCargando(false)
    }

    const getDatos = (
        id_promocion, 
        nombreProm,
        area,
        infoPromocion,
        codigoPromo) =>{

        setCampos(
            {
                id_promocion,
                nombreProm,
                area,
                infoPromocion,
                codigoPromo
            }
        )
    }

    const onSubmit = (e) =>{
        const newFechas = {
            id: campos.id_promocion,
            fechaInicio: fechas.fecha1,
            fechaTerminacion: fechas.fecha2
        }
        HabilitarPromocion(newFechas);

        
    }

    
    const onInputChange = (e) => {
        setFechas({
            ...fechas,
            [e.target.name]: e.target.value,

        })

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
                                                    dato.id_promocion, 
                                                    dato.nombreProm,
                                                    dato.area,
                                                    dato.infoPromocion,
                                                    dato.codigoPromo
                                                    ) 
                                                } key={index} className="table-info">

                                                    <td>{dato.id_promocion}</td>
                                                    <td>{dato.nombreProm}</td>
                                                    <td>{dato.area}</td>
                                                    <td>{dato.infoPromocion}</td>
                                                    <td>{dato.codigoPromo}</td>
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
                            <input 
                                name="id" 
                                value={campos.id_promocion} 
                                type="text" 
                                className="form-control" 
                                onChange={onInputChange}
                                disabled 
                            />
                        </div>
                        <div className="form-group">
                            <label>{props.prop2}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.nombreProm} type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop3}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.area}  type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop4}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.infoPromocion}  type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>{props.prop5}</label>
                        </div>
                        <div className="form-group">
                            <input value={campos.codigoPromo}  type="text" className="form-control" disabled />
                        </div>
                        {props.prop6 &&
                            <>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>{props.prop6}</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha1"
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{props.prop7}</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha2"
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>

                                    <button type="submit" className="btn btn-primary">
                                        Habilitar
                                    </button>
                                </form>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}