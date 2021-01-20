import React, { } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/Login/imagenes/logo.png'
import './navbar.css'

export const Navbar = props => {
    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div>
                <img className="img-fluid imagen" alt="Responsive" src={logo} />
            </div>
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link className="nav-link" to={props.propl0}>{props.prop0}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={props.propl1}>{props.prop1}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={props.propl2}>{props.prop2}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={props.propl3}>{props.prop3}</Link>
                </li>
                
            </ul>
        </nav>

    )
}