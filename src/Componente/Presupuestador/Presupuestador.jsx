import React, { useEffect, useState } from 'react'
import ListasDesplegables from '../ListasDesplegables/ListasDesplegables'
import misDatos from '../../datos/presupuesto.json'

const Presupuestador = () => {

    const [datos, setDatos] = useState([])

    
    useEffect(() => {
        const promesa = new Promise((acc, rej) => {
            acc(misDatos)
        })
        promesa
            .then((result) => {
                setDatos(result)
            })
            .catch((erro) => {
                console.log(erro);
            })

    }, [datos])


    return (
        <div>
            <h1>Presupuestador</h1>

            <ListasDesplegables datos={datos} />
        </div>
    )
}

export default Presupuestador
