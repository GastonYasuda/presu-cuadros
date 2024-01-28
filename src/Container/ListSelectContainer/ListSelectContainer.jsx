import React, { Fragment, useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { cotizador } from '../../Context/ApiContext';

const ListSelectContainer = () => {


    const { precioData, addArray, sumarTodo, quoterResult } = useContext(cotizador)

    const [sumarTodosLosPrecios, setSumarTodosLosPrecios] = useState([])

    useEffect(() => {
        if (sumarTodosLosPrecios.length !== 0) {
            // console.log(sumarTodosLosPrecios);
            sumarTodo(sumarTodosLosPrecios, precioData.base)
            //console.log(precioData.base);
        }
    }, [sumarTodosLosPrecios, addArray])



    const calcularPresupuesto = () => {
        console.log("traigo el addArray[key].descriptionValue y los sumo", addArray);

        let nuevoNuevo = []
        for (const key in addArray) {
            let nombre = Object.keys(addArray[key].descriptionValue)[0]
            let elPrecio = addArray[key].descriptionValue[nombre]

            nuevoNuevo = [...nuevoNuevo, elPrecio]
        }
        setSumarTodosLosPrecios(nuevoNuevo)
    }



    return (
        <div>
            <h1>HOLA PRESU!</h1>
            <h6>Precio Base: ${precioData.base} -</h6>

            {
                precioData.precios !== undefined &&
                precioData.precios.map((description, i) => {
                    return (
                        <ListSelect key={i} description={description} />
                    )
                })
            }


            {
                quoterResult !== undefined &&
                <h1>Cotización Final: ${quoterResult}-</h1>
            }

            <br />
            <br />

            <Button onClick={calcularPresupuesto}>CALCULAR PRESU</Button>

            <Button variant="primary">
                <Link to='/update-price' style={{ color: '#ffff', textDecoration: 'none' }}>Change Price</Link>
            </Button >


        </div >
    )
}

export default ListSelectContainer
