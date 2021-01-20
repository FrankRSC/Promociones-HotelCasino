
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { CrearPromo } from './components/CrearPromo/index'
import { Aprobar } from './components/Aprobar/index'
import { GenerarPromocion } from './components/GenerarPromocion/index'
import { Habilitar } from './components/Habilitar/index'
import { Login } from './components/Login/index'
import { GenerarSoli } from './components/GeneracionSoli/index'
import { Navbar } from './components/Navbar'
import { Solicitudes } from './components/Solicitudes/index'
import {Flyer} from './components/Flyer/index'
import {Reportes} from './components/Reportes/index'
import {Eventos} from './components/Eventos/index'



function App() {
  return (
    <Router>
      {/*Login*/}
      <Route path="/" exact component={Login} />
      {/*GERENTE*/}

      {/*Solicitar una promocion*/}
      <Route path="/gerente/SolicitudPromocion" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Reporte de ventas"}
              prop1={"Generar Solicitud"}
              prop2={"Aprobar promocion"}
              prop3={"Habilitar promocion"}
              propl0={"/gerente/ReportedeVentas"}
              propl1={"/gerente/SolicitudPromocion"}
              propl2={"/gerente/AprobarPromocion"}
              propl3={"/gerente/Habilitar"}
            />
            <GenerarSoli />
          </div>
        )
      }
      }
      />
      {/*Aprobar promociones*/}
      <Route path="/gerente/AprobarPromocion" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Reporte de ventas"}
              prop1={"Generar Solicitud"}
              prop2={"Aprobar promocion"}
              prop3={"Habilitar promocion"}
              propl0={"/gerente/ReportedeVentas"}
              propl1={"/gerente/SolicitudPromocion"}
              propl2={"/gerente/AprobarPromocion"}
              propl3={"/gerente/Habilitar"}
            />
            <Aprobar />
          </div>
        )
      }
      }
      />

      {/*Habilitar promocion*/}
      <Route path="/gerente/Habilitar" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Reporte de ventas"}
              prop1={"Generar Solicitud"}
              prop2={"Aprobar promocion"}
              prop3={"Habilitar promocion"}
              propl0={"/gerente/ReportedeVentas"}
              propl1={"/gerente/SolicitudPromocion"}
              propl2={"/gerente/AprobarPromocion"}
              propl3={"/gerente/Habilitar"}
            />
            <Habilitar
              prop1={"No. promoción"}
              prop2={"Nombre de promoción"}
              prop3={"Área"}
              prop4={"Descripción de promoción"}
              prop5={"Código de promoción"}
              prop6={"Fecha de inicio"}
              prop7={"Fecha de terminación"}
              flag={"x"}
            />
          </div>
        )
      }
      }
      />

      {/*Reporte de ventas de las areas*/}
      <Route path="/gerente/ReportedeVentas" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Reporte de ventas"}
              prop1={"Generar Solicitud"}
              prop2={"Aprobar promocion"}
              prop3={"Habilitar promocion"}
              propl0={"/gerente/ReportedeVentas"}
              propl1={"/gerente/SolicitudPromocion"}
              propl2={"/gerente/AprobarPromocion"}
              propl3={"/gerente/Habilitar"}
            />
            <Reportes
              prop1={"Id producto"}
              prop2={"Nombre producto"}
              prop3={"Cantidad vendida"}
              prop4={"Total vendido"}
              prop5={"Fecha de envío"}
            />
          </div>
        )
      }
      }
      />

      <Route path="/gerente/Eventos" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Reporte de ventas"}
              prop1={"Generar Solicitud"}
              prop2={"Aprobar promocion"}
              prop3={"Habilitar promocion"}
              propl0={"/gerente/ReportedeVentas"}
              propl1={"/gerente/SolicitudPromocion"}
              propl2={"/gerente/AprobarPromocion"}
              propl3={"/gerente/Habilitar"}
            />
            <Eventos />
          </div>
        )
      }
      }

      />

      {/*ENCARGADO*/}

      {/*Crear una propuesta de la promocion*/}
      <Route path="/encargado/CrearPromocion" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Solicitudes"}
              prop1={"Crear Promocion"}
              prop2={"Flyer"}
              prop3={"Generar Promocion"}
              propl0={"/encargado/Solicitudes"}
              propl1={"/encargado/CrearPromocion"}
              propl2={"/encargado/Flyer"}
              propl3={"/encargado/GenerarPromocion"}
            />
            <CrearPromo />
          </div>
        )
      }
      }
      />

      {/*Genarar la promocion*/}
      <Route path="/encargado/GenerarPromocion" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Solicitudes"}
              prop1={"Crear Promocion"}
              prop2={"Flyer"}
              prop3={"Generar Promocion"}
              propl0={"/encargado/Solicitudes"}
              propl1={"/encargado/CrearPromocion"}
              propl2={"/encargado/Flyer"}
              propl3={"/encargado/GenerarPromocion"}
            />
            <GenerarPromocion />
          </div>
        )
      }
      }
      />
      <Route path="/encargado/Solicitudes" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Solicitudes"}
              prop1={"Crear Promocion"}
              prop2={"Flyer"}
              prop3={"Generar Promocion"}
              propl0={"/encargado/Solicitudes"}
              propl1={"/encargado/CrearPromocion"}
              propl2={"/encargado/Flyer"}
              propl3={"/encargado/GenerarPromocion"}
            />
            <Solicitudes />
          </div>
        )
      }
      }

      />

      <Route path="/encargado/Flyer" render={() => {
        return (
          <div>
            <Navbar
              prop0={"Solicitudes"}
              prop1={"Crear Promocion"}
              prop2={"Flyer"}
              prop3={"Generar Promocion"}
              propl0={"/encargado/Solicitudes"}
              propl1={"/encargado/CrearPromocion"}
              propl2={"/encargado/Flyer"}
              propl3={"/encargado/GenerarPromocion"}
            />
            <Flyer />
          </div>
        )
      }
      }

      />

    </Router>
  );
}

export default App;
