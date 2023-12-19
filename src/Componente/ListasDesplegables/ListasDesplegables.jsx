import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';


const ListasDesplegables = ({ datos }) => {

    const [medida, setMedida] = useState([])
    

    useEffect(() => {
        if (Object.keys(datos).length !== 0) {
            console.log(typeof (datos));
            console.log(datos);
            setMedida(datos.medida)

        }
        console.log(Object.keys(medida)[0]);

    }, [datos, medida])


    return (
        <div>
            <Form.Select aria-label="Default select example">
                <option>Medidas</option>
                <option value="1">15x20</option>
                <option value="2">25x30</option>
                <option value="3">35x40</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
                <option>Material</option>
                <option value="1">Plástico</option>
                <option value="2">Vidrio</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
                <option>Marco</option>
                <option value="1">Aluminio</option>
                <option value="2">Madera</option>
                <option value="3">MDF</option>
            </Form.Select>
        </div>
    )
}

export default ListasDesplegables
