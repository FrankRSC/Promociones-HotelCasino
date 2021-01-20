import React, { useState } from 'react'
import logo from './imagenes/logo.png'
import './css/login.css'

export const Login = props => {

    const [gerente, setGerente] = useState({
        username: 'gerente',
        password: 'gerente123'

    });
    const [encargado, setEncargado] = useState({
        username: 'encargado',
        password: 'encargado123'

    });

    const [usuario,setUsuario] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        if (gerente.username === usuario.username){
            window.location.href = "gerente/ReportedeVentas"
        }else if(encargado.username === usuario.username){
            window.location.href = "encargado/Solicitudes";
        }else{
            alert("Usuario no encontrado")
        }

    }

    const onInputChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,

        })

    }

    return (
        <div id="pt">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group centrardiv">
                        <img id="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="form-group py-4">
                        <label>Usuario</label> 
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <button  id="botonLogin" type="submit" className="btn btn-warning">
                        Login
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )

}