import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';


const Listados = ({ losDatos, valor }) => {


    const generarOpciones = () => {
        const opciones = [];

        for (const key in losDatos) {
            opciones.push(
                <option key={key} value={losDatos[key]}>
                    {key}
                </option>
            );
        }

        return opciones;
    };



    return (
        <Form.Select aria-label="Default select example">
            <option>{valor}</option>

            {generarOpciones()}

        </Form.Select>
    )
}

export default Listados
