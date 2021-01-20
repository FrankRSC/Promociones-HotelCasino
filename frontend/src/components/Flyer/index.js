import React, { useState, useEffect } from 'react'
import {Carga} from '../Carga/carga.js';
import { obtenerPromocionesHabilitadas } from '../../api/habilitarPromo'
import {ponerFlyer} from '../../api/flyer'

import './css/flyer.css'


export const Flyer = props => {
    const [datos, setDatos] = useState([]);
    const [campos, setCampos] = useState({
        id_promocion:''
    });

    const [urlFlyer,setUrlFlyer] = useState({

        flyer:''
    });
    const [cargando,setCargando] = useState(false)

    useEffect( () => {
        obtenerPromosHab();
    }, [])

    const obtenerPromosHab = async () => {
        setCargando(true)
        //Carga las promociones habilitadas con su fecha
        const result = await obtenerPromocionesHabilitadas();
        setDatos(result.data.promociones)
        setCargando(false)
    }

    //Toma el id de la promocion para insertar su flyer
    const getDatos = (id_promocion) =>{
        setCampos(
            {
                id_promocion,
            }
        )
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const newFlyer = {
            id_promocion: campos.id_promocion,
            ...urlFlyer,
        }
        ponerFlyer(newFlyer)

    }

    const onInputChange = (e) => {
        setUrlFlyer({
            ...urlFlyer,
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
                                    <th scope="col">id promoción</th>
                                    <th scope="col">Nombre de promoción</th>
                                    <th scope="col">Área</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Código</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos ?
                                        datos.map((dato, index) => {
                                            return (
                                                <tr onClick={() => getDatos(
                                                    dato.id_promocion, 
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
                            <label>Id promoción</label>
                            <input name="idpromo" value={campos.id_promocion} type="text" className="form-control" disabled />
                            <label>Flyer</label>
                            <input onChange={onInputChange} name="flyer" type="text" className="form-control" />
                        </div>
                        <form onSubmit={onSubmit}>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}