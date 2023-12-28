import React, { useEffect, useState, useContext } from 'react'
import ListasDesplegables from '../ListasDesplegables/ListasDesplegables'
import { cotizador } from '../Context/ApiContext';


const Presupuestador = () => {
    const { presu, usuario } = useContext(cotizador)



    useEffect(() => {
        if (presu.length !== 0) {
            //  console.log(presu);
            // console.log(presu.precios.length);
        }
    }, [presu, usuario])

    return (
        <div>
            <h1>Presupuestador</h1>
            <h1>precio base: ${presu.base}</h1>

            <ListasDesplegables presu={presu} />
        </div>
    )
}

export default Presupuestador
