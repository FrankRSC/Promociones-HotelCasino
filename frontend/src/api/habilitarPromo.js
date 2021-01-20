import axios from 'axios'
import config from '../config'
const {apiGatewayUrl} = config;

const baseUrl = `${apiGatewayUrl}/api/promociones/aprobadas`

export async function obtenerPromocionesHabiles() {
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

export async function obtenerPromocionesHabilitadas() {
    try {
        const response = await axios({
            url: `${baseUrl}/habilitadas`,
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

export async function HabilitarPromocion(data) {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'POST',
            data,
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

