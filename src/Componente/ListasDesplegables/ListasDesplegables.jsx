import React, { useEffect, useState } from 'react'
import Listados from '../Listados/Listados';

const ListasDesplegables = ({ presu }) => {

    const [materiales, setMateriales] = useState([])
    const [titleMateriales, setTitleMateriales] = useState('')

    const [colores, setColores] = useState([])
    const [titleColores, setTitleColores] = useState('')


    const [medidas, setMedidas] = useState([])
    const [titleMedidas, setTitleMedidas] = useState('')


    useEffect(() => {
        if (presu.length !== 0) {

            const valorPresu = Object.keys(presu)
            for (const key in valorPresu) {
                if (valorPresu[key] === 'medidas') {
                    setTitleMedidas(valorPresu[key])
                } else if (valorPresu[key] === 'colores') {
                    setTitleColores(valorPresu[key])
                } else if (valorPresu[key] === "materiales")
                    setTitleMateriales(valorPresu[key])
            }

            setMateriales(presu.materiales)
            setMedidas(presu.medidas)
            setColores(presu.colores)

        }
    }, [presu])


    return (
        <div>

            <Listados lista={materiales} optionTitle={titleMateriales} />
            <Listados lista={colores} optionTitle={titleColores} />
            <Listados lista={medidas} optionTitle={titleMedidas} />

            <button>COTIZAR</button>
        </div >
    )
}

export default ListasDesplegables
