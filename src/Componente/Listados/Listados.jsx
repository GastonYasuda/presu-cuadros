import React, { useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { cotizador } from '../Context/ApiContext';


const Listados = ({ lista, optionTitle }) => {

    const { presu } = useContext(cotizador)

    useEffect(() => {
        if (optionTitle !== '' && optionTitle !== undefined) {
            console.log(optionTitle);

        }
    }, [optionTitle])

    return (
        <Form.Select aria-label="Default select example">
            <option>{optionTitle}</option>

            {
                lista.map((list, i) => {
                    return (
                        <option value={i} key={i}>{Object.keys(list)}</option>
                    )
                })
            }
        </Form.Select>

    )
}

export default Listados
