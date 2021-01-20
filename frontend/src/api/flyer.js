import axios from 'axios'
import config from '../config'
const {apiGatewayUrl} = config;

const baseUrl = `${apiGatewayUrl}/api/flyer`

export async function ponerFlyer(data) {
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

export async function muestraFlyer(id) {
    try {
        const response = await axios({
            url: `${baseUrl}/promocion${id}`,
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

export async function obtenerPromocionesConFlyer() {
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
