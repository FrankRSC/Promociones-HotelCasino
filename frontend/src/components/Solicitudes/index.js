import React, { useState, useEffect } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../components/Login/imagenes/logo.png'
import {Carga} from '../Carga/carga.js';
import {verSolicitudes} from '../../api/solicitud'
import './css/solicitudes.css'

export const Solicitudes = props => {


    const [datos, setDatos] = useState([]);
    const [cargando,setCargando] = useState(false)

    useEffect(() => {
      verSoli();
    }, [])

    const verSoli = async () => {
      setCargando(true)
      const result = await verSolicitudes();
      setDatos(result.data.solicitudes)
      setCargando(false)
    }

    if(cargando){
      return(
          <Carga/>
      )
    }

    return (
        <div className="p-5">
            <Accordion defaultActiveKey="0">
            {
          datos.length > 0 ? datos.map((dato, index) => (
            <Card key={index} >
              <Card.Header>
                <Accordion.Toggle className="titulo" as={Button} variant="link" eventKey="0">
                  <h4 className="colorh">Solicitud: {dato.id_solicitud}</h4> 
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <h5 className="colorl">Id reporteventa:</h5>
                        <h6 className="">{dato.id_reporteVenta}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">No. Solicitud:</h5>
                        <h6 className="">{dato.id_solicitud}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">No. Promoción:</h5>
                        <h6>{dato.no_promocion}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Fecha:</h5>
                        <h6>{dato.fecha.substr(0,10)}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Hora:</h5>
                        <h6>{dato.hora.substr(11,5)}</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h5 className="colorl">Área:</h5>
                        <h6>{dato.area}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Decripción:</h5>
                        <h6>{dato.descripcion}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Gerente:</h5>
                        <h6>{dato.encargado_area}</h6>
                      </div>
                    </div>
                    
                  </div>
                  <div id="botonesAD" className="form-group">
                  <Link 
                    className="nav-link" 
                    to={`/encargado/CrearPromocion?id=${dato.id_solicitud}&id2=${dato.id_reporteVenta}`}>
                    <button
                      id="aButton"
                      className="btn btn-primary btn-lg">
                      Generar promoción
                    </button>
                  </Link>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
            :
            <div>
              <div id="logo" className="form-group">
                <img src={logo} alt="logo" />
                <h4>No hay más solicitudes</h4>
              </div>
            </div>
        }

        
        </Accordion>
        </div>

    )
}