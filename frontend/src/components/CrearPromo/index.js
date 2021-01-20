import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { crearPromocion } from '../../api/Veraprobar'
import "./css/crearpromo.css"


export const CrearPromo = props => {


    const [datos, setDatos] = useState([]);

    const onInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,

        })

    }


    const serchParams = new URLSearchParams(useLocation().search);

    const onSubmit = (e) => {
        const newPromo = {
            id_solicitud: serchParams.get('id'),
            id_reporteVenta: serchParams.get('id2'),
            ...datos
        }
        crearPromocion(newPromo);

    }


    return (
        <div id="pt">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <div className="text-center">
                        <h4 className="naranja">
                            Crear promoción
                        </h4>
                    </div>
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Nombre promoción</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="nombrePromocion"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Área</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="area"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Código de promoción</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="codigo"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Cantidad de producto</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={onInputChange}
                            name="cantidadProd"
                            pattern="^[0-9]+"
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descuento %</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={onInputChange}
                            name="descuento"
                            pattern="^[0-9]+"
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción de la promoción</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="descripcion"
                            required
                        />
                    </div>
                    
                        <button type="submit" className="btn btn-primary w-100">
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}