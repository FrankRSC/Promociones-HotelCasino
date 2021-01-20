import React from 'react'
import imagen from './Imagenes/loading.gif'

export const Carga = props => {
    return (
        <div styles={{width:'100vw', height:'100vh'}} className="d-flex justify-content-center align-items-center">
            <div>
                <img alt='a' src={imagen}/>
            </div>
        </div>
    )
}

