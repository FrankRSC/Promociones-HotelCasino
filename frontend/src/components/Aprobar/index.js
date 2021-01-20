import React, { useState, useEffect } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import {Carga} from '../Carga/carga.js';
import logo from '../../components/Login/imagenes/logo.png'
import './css/aprobar.css'

import { obtenerPromociones, aprobarPromocion } from '../../api/Veraprobar'



export const Aprobar = props => {

  const [datos, setDatos] = useState([]);
  const [cargando,setCargando] = useState(false)

  useEffect( () => {
    obtenerPromo();
  }, [])

  const obtenerPromo = async () => {
    setCargando(true)
    const result = await obtenerPromociones();
    //Filtra las promociones que no estan aprobadas de el resultado 
    const filtrado = result.data.promociones.filter(prom => !prom.aprobado)
    setDatos(filtrado)
    setCargando(false)
  }

  const getID = async (id) => {
    setCargando(true)
    await aprobarPromocion(id)
    alert("Promocion aprobada")
    window.location.reload(true);
    setCargando(false)

  }

  const getIDD = async (id) => {
    setCargando(true)
    await aprobarPromocion(id)
    alert("Promocion denegada")
    window.location.reload(true);
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
                  <h4 className="colorh">Promoción: {dato.nombreProm}</h4> 
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <h5 className="colorl">Id. promoción:</h5>
                        <h6>{dato.id_promocion}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Nombre de promoción:</h5>
                        <h6>{dato.nombreProm}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Área:</h5>
                        <h6>{dato.area}</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <h5 className="colorl">Informacion de la promoción:</h5>
                        <h6>{dato.infoPromocion}</h6>
                      </div>
                      <div className="form-group">
                        <h5 className="colorl">Código promoción:</h5>
                        <h6>{dato.codigoPromo}</h6>
                      </div>
                    </div>
                  </div>
                  <div id="botonesAD" className="form-group">
                    <button
                      id="aButton"
                      className="btn btn-success"
                      onClick={() => getID(dato.id_promocion)}>
                      Aprobar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => getIDD(dato.id_promocion)}
                    >
                      Denegar
                    </button>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
            :
            <div id="logo">
              <img src={logo} alt="logo1" />
              <div className="form-group">
                <h4>No hay más promociones</h4>
              </div>
            </div>


        }



      </Accordion>
    </div>
  )

}