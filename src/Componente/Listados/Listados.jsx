import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';


const Listados = ({ lista, setParaSumar, paraSumar}) => {

    const [selectedValue, setSelectedValue] = useState('');

    const [valores, setValores] = useState([])

    const [elemento, setElemento] = useState('')
    const [ubicacion, setUbicacion] = useState()
    const [optionTitle, setOptionTitle] = useState('')


    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        setUbicacion(event.target.value)
        setElemento(Object.keys(lista)[0])
    };



    const precioProductoSeleccionado = (valorSeleccionado, ubicacionDelValor) => {
        if (valorSeleccionado !== undefined && ubicacionDelValor !== undefined) {

            const valorProductoSeleccionado = lista[valorSeleccionado][ubicacionDelValor]
            const productoPrecio = (Object.keys(lista), valorProductoSeleccionado)
            const categoria = Object.keys(lista)[0]
            const creoObjeto = { categoria, productoPrecio }


            setParaSumar((prevSuma) => [...prevSuma, creoObjeto]);

            for (const key in paraSumar) {

                if (Object.keys(lista)[0] === paraSumar[key].categoria) {

                    const indiceAQuitar = [key];
                    paraSumar.splice(indiceAQuitar, 1);

                    setParaSumar([...paraSumar, creoObjeto]);
                }

            }
        }
    }



    useEffect(() => {

        for (const key in lista) {

            setValores(lista[key])
        }

        setOptionTitle(Object.keys(lista))

        precioProductoSeleccionado(elemento, ubicacion)

    }, [elemento, ubicacion])


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
