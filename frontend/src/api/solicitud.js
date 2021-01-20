import axios from 'axios'
import config from '../config'

const {apiGatewayUrl} = config;

const baseUrl = `${apiGatewayUrl}/api/solicitudpromocion`

export async function verSolicitudes() {
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

export async function generarSolicitud(data) {
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