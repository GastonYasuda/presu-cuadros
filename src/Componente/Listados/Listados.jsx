import React from 'react'
import Form from 'react-bootstrap/Form';


const Listados = ({ losDatos }) => {

    console.log(losDatos)



    return (
        <Form.Select aria-label="Default select example">
            <option>{losDatos}</option>
            <option value="1">15x20</option>
            <option value="2">25x30</option>
            <option value="3">35x40</option>
        </Form.Select>
    )
}

export default Listados
