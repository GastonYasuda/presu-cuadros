import React, { useEffect, useState } from 'react'
import ListasDesplegables from '../ListasDesplegables/ListasDesplegables'
import misDatos from '../../datos/presupuesto.json'

const Presupuestador = () => {

    const [datos, setDatos] = useState([])

    // fetch('https://fakestoreapi.com/products/1')
    //     .then(res => res.json())
    //     .then(json => console.log(json))

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
