import React, { useContext, useEffect } from 'react'
import { cotizador } from '../Context/ApiContext';


const ListasDesplegables = ({ }) => {


    const { presu, usuario } = useContext(cotizador)

    useEffect(() => {
        if (presu.length !== 0) {
            console.log(presu);
            console.log(usuario);
        }
    }, [presu, usuario])

    return (
        <div>

            <h1>precio base: ${presu.base}</h1>
            <button>COTIZAR</button>
        </div>
    )
}

export default ListasDesplegables
