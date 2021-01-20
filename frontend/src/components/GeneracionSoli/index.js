import React, { useState } from 'react'
import {generarSolicitud} from '../../api/solicitud'
import { useLocation } from 'react-router-dom';
import "./css/generacionSoli.css"



export const GenerarSoli = props => {

    const [datos, setDatos] = useState([]);

    const onInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,

        })

    }

    const serchParams = new URLSearchParams(useLocation().search);
    



    const onSubmit = (e) => {
        const newSolicitud = {
            id_reporte:serchParams.get('id'),
            id_producto:serchParams.get('id2'),
            ...datos
        }
        generarSolicitud(newSolicitud);

    }

    return (

        <div id="pt">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <div className="text-center">
                            <h4 className="naranja">
                                Generar solicitud
                            </h4>
                        </div>
                        <label>Id. Reporte de venta</label>
                        <input
                            value={serchParams.get('id')}
                            type="number"
                            className="form-control"
                            name="idreporteventa"
                            onChange={onInputChange}
                            disabled
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Id. producto</label>
                        <input
                            value={serchParams.get('id2')}
                            type="text"
                            className="form-control"
                            name="idproducto"
                            onChange={onInputChange}
                            disabled
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>No. promoción</label>
                        <input
                            type="number"
                            className="form-control"
                            name="nopromocion"
                            onChange={onInputChange}
                            pattern="^[0-9]+"
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <input
                            type="text"
                            className="form-control"
                            name="decripcion"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de creación</label>
                        <input
                            type="date"
                            className="form-control"
                            name="fecha"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora de creación</label>
                        <input
                            type="time"
                            className="form-control"
                            name="hora"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Área destinada</label>
                        <input
                            type="text"
                            className="form-control"
                            name="area"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre completo del gerente</label>
                        <input
                            type="text"
                            className="form-control"
                            name="encargado"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}