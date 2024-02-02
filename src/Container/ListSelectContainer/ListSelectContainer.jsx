import React, { useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { cotizador } from '../../Context/ApiContext';

const ListSelectContainer = () => {

    const { dataPriceLocal, addArray, addAll, sweety, quoterResult } = useContext(cotizador)

    const [sumarTodosLosPrecios, setSumarTodosLosPrecios] = useState([])

    useEffect(() => {

        if (sumarTodosLosPrecios.length !== 0) {
            addAll(sumarTodosLosPrecios, dataPriceLocal.base)
        }


    }, [sumarTodosLosPrecios, addArray, quoterResult])

    const calculateBudget = () => {

        let myNewPriceArray = []
        for (const key in addArray) {
            let name = Object.keys(addArray[key].descriptionValue)[0]
            let price = addArray[key].descriptionValue[name]

            myNewPriceArray = [...myNewPriceArray, price]
        }

        if ((dataPriceLocal.precios).length === addArray.length) {
            setSumarTodosLosPrecios(myNewPriceArray)
        } else {
            sweety("ERROR", "Debes seleccionar todos los campos", "error")
        }
    }

    return (
        <>
            <h1>HOLA PRESU!</h1>
            <h6>Precio Base: ${dataPriceLocal.base} -</h6>

            {
                dataPriceLocal.precios !== undefined &&
                dataPriceLocal.precios.map((description, i) => {
                    return (
                        <ListSelect key={i} description={description} />
                    )
                })
            }

            {
                quoterResult != 0 &&
                <h1>Cotización Final: ${quoterResult}-</h1>
            }

            <Button onClick={calculateBudget}>CALCULAR PRESU</Button>

            <Button variant="primary">
                <Link to='/update-price' style={{ color: '#ffff', textDecoration: 'none' }}>ABM precios</Link>
            </Button >
        </ >
    )
}

export default ListSelectContainer
