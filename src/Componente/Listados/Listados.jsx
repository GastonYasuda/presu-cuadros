import React, { Fragment, useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { cotizador } from '../Context/ApiContext';
import ListItem from '../ListItem/ListItem';


const Listados = ({ lista }) => {

    const [selectedValue, setSelectedValue] = useState('');

    const [valores, setValores] = useState([])

    const [elemento, setElemento] = useState('')
    const [ubicacion, setUbicacion] = useState()

    const [suma, setSuma] = useState([])

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        //console.log(event.target.value);//me trae la ubicacion de lo seleccionado
        setUbicacion(event.target.value)

        //console.log(Object.keys(lista)[0]); //me trae el optionTitle
        setElemento(Object.keys(lista)[0])

        //console.log(lista);

    };


    const [optionTitle, setOptionTitle] = useState('')


    useEffect(() => {

        for (const key in lista) {

            setValores(lista[key])
            // console.log(lista[key]);
            // console.log(lista[key][0]);

        }

        if (elemento !== undefined && ubicacion !== undefined) {

            const valorProductoSeleccionado = lista[elemento][ubicacion]
            console.log(valorProductoSeleccionado[Object.keys(valorProductoSeleccionado)]);

            const precioSeleccionado = valorProductoSeleccionado[Object.keys(valorProductoSeleccionado)]


            setSuma((prevSuma) => [...prevSuma, precioSeleccionado]);



        }


      

        setOptionTitle(Object.keys(lista))
    }, [ubicacion, elemento, lista])

    useEffect(() => {
        if (suma.length !== 0) {
            console.log(suma);
        }
        
    }, [suma]);

    return (
        <Form.Select
            aria-label="Default select example"
            value={selectedValue}
            onChange={handleSelectChange}>

            <option>{optionTitle}</option>

            {
                valores.length !== 0 &&
                valores.map((list, i) => {
                    return (
                        <option value={i} key={i}>{Object.keys(list)}</option>
                    )
                })
            }

        </Form.Select>

    )
}

export default Listados
