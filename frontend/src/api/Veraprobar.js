import axios from 'axios'
import config from '../config'

const {apiGatewayUrl} = config;

const baseUrl = `${apiGatewayUrl}/api/promociones`

export async function obtenerPromociones() {
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

export async function aprobarPromocion(id) {
    try {
        const response = await axios({
            url: `${baseUrl}/aprobar/${id}`,
            method: 'PUT',
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

export async function denegarPromocion(id) {
    try {
        const response = await axios({
            url: `${baseUrl}/desaprobar/${id}`,
            method: 'PUT',
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


export async function crearPromocion(data) {
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

