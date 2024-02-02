import React, { useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { cotizador } from '../../Context/ApiContext';

const ListSelectContainer = () => {


    const { precioDataLocal, addArray, sumarTodo, sweety, quoterResult } = useContext(cotizador)

    const [sumarTodosLosPrecios, setSumarTodosLosPrecios] = useState([])

    useEffect(() => {

        if (sumarTodosLosPrecios.length !== 0) {
            // console.log(sumarTodosLosPrecios);
            sumarTodo(sumarTodosLosPrecios, precioDataLocal.base)
            //console.log(precioDataLocal.base);
        }


    }, [sumarTodosLosPrecios, addArray, quoterResult])

    const calcularPresupuesto = () => {
        console.log("traigo el addArray[key].descriptionValue y los sumo", addArray);

        let nuevoNuevo = []
        for (const key in addArray) {
            let nombre = Object.keys(addArray[key].descriptionValue)[0]
            let elPrecio = addArray[key].descriptionValue[nombre]

            nuevoNuevo = [...nuevoNuevo, elPrecio]
        }

        console.log(precioDataLocal.precios.length);
        console.log(addArray.length);

        if ((precioDataLocal.precios).length === addArray.length) {
            setSumarTodosLosPrecios(nuevoNuevo)
        } else {
            sweety("ERROR", "Debes seleccionar todos los campos", "error")

        }
    }



    return (
        <div>
            <h1>HOLA PRESU!</h1>
            <h6>Precio Base: ${precioDataLocal.base} -</h6>

            {
                precioDataLocal.precios !== undefined &&
                precioDataLocal.precios.map((description, i) => {
                    return (
                        <ListSelect key={i} description={description} />
                    )
                })
            }

            {
                quoterResult != 0 &&
                <h1>Cotización Final: ${quoterResult}-</h1>
            }

            <br />
            <br />

            <Button onClick={calcularPresupuesto}>CALCULAR PRESU</Button>

            <Button variant="primary">
                <Link to='/update-price' style={{ color: '#ffff', textDecoration: 'none' }}>ABM precios</Link>
            </Button >


        </div >
    )
}

export default ListSelectContainer
