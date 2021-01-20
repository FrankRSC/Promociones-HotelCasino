import React, { useState, useEffect } from 'react'
import { obtenerPromocionesConFlyer, muestraFlyer} from '../../api/flyer'
import {Carga} from '../Carga/carga.js';
import './css/generarpromo.css'


export const GenerarPromocion = props => {

    const [datos, setDatos] = useState([]);
    const [campos, setCampos] = useState({
        id_promocion:'',
        id_producto:'',
        nombreProm:'',
        infoPromocion:'',
        cantidadProducto:'',
        descuento:'',
        codigoPromo:'',
        imageinurl:''
    });
    const [cargando,setCargando] = useState(false)

    useEffect( () => {
        obtenerPromocionCF();
    }, [])

    const obtenerPromocionCF = async () => {
        setCargando(true)
        //Carga las promociones habilitadas con su fecha
        const result = await obtenerPromocionesConFlyer();
        setDatos(result.data.flyer)
        setCargando(false)
    }

    const buscarFlyer = async (
        id_promocion,
        id_producto,
        nombreProm,
        infoPromocion,
        cantidadProducto,
        descuento,
        codigoPromo) =>{
        const result = await muestraFlyer(id_promocion);
        setCampos({
            imageinurl: result.data.flyer[0].imagen,
            id_promocion,
            id_producto,
            nombreProm,
            infoPromocion,
            cantidadProducto,
            descuento,
            codigoPromo,
        }) 

    }
    if(cargando){
        return(
            <Carga/>
        )
    }
    return (
        <div>
            <div className="row p-3">
                <div className="col-md-7">
                    <div className="table-responsive">
                        <table className="table table-hover table-succes chiquita">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">Id. promoción</th>
                                    <th scope="col">Nombre de promoción</th>
                                    <th scope="col">Área</th>
                                    <th scope="col">Descripción de promoción</th>
                                    <th scope="col">Cantidad del producto</th>
                                    <th scope="col">Descuento</th>
                                    <th scope="col">Código de promoción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos ?
                                        datos.map((dato, index) => {
                                            return (
                                                <tr onClick={() => buscarFlyer(
                                                    dato.id_promocion,
                                                    dato.id_producto,
                                                    dato.nombreProm,
                                                    dato.infoPromocion,
                                                    dato.cantidadProducto,
                                                    dato.descuento,
                                                    dato.codigoPromo
                                                )
                                                } key={index} className="table-info">

                                                    <td>{dato.id_promocion}</td>
                                                    <td>{dato.id_producto}</td>
                                                    <td>{dato.nombreProm}</td>
                                                    <td>{dato.infoPromocion}</td>
                                                    <td>{dato.cantidadProducto}</td>
                                                    <td>{dato.descuento}</td>
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
                            <label>Id. promoción</label>
                            <input value={campos.id_promocion} name="idpromo" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>id producto</label>
                            <input value={campos.id_producto} name="nopromocion" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Nombre de promoción</label>
                            <input value={campos.nombreProm} name="nombrepromo" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Descripción </label>
                            <input value={campos.infoPromocion} name="area" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Cantidad del producto</label>
                            <input value={campos.cantidadProducto} name="descpromo" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Descuento</label>
                            <input value={campos.descuento} name="codigopromo" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Codigo promoción</label>
                            <input value={campos.codigoPromo} name="finicio" type="text" className="form-control" disabled />
                        </div>
                        <div className="form-group">
                            <label>Flyer</label>
                            <input value={campos.imageinurl} name="flayer" type="text" className="form-control" disabled />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Enviar promoción
                </button>
                    </div>
                </div>
            </div>
        </div>

    )

}