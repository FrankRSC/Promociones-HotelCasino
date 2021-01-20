import axios from 'axios'
import config from '../config'

const {apiGatewayUrl} = config;

const baseUrl = `${apiGatewayUrl}/api/reportedeventas`

export async function obtenerReportes() {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export async function crearReporte() {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export async function obtenerEventos() {
    try {
        const response = await axios({
            url: `${baseUrl}/eventos`,
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

