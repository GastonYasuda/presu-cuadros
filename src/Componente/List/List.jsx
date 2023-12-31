import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap';

const List = ({ valorCat, tituloCat, setCategoriaSeleccionada, setDescripcionSeleccionada }) => {


    const [selectedValue, setSelectedValue] = useState('');





    const handleSelectChange = (event) => {

      //  console.log(tituloCat);
        setCategoriaSeleccionada(tituloCat)

      //  console.log(event.target.value);
        setDescripcionSeleccionada(event.target.value)


        setSelectedValue(event.target.value);
        // setUbicacion(event.target.value)
        // setElemento(Object.keys(lista)[0])
    };



    return (
        <div>


            <Form.Select
                aria-label="Default select example"
                value={selectedValue}
                onChange={handleSelectChange}>

                <option>{tituloCat}</option>

                {
                    valorCat !== undefined &&
                    valorCat.map((valor, i) => {
                        return (
                            <Fragment key={i}>
                                <option value={i} key={i}>{Object.keys(valor)}</option>
                            </Fragment>
                        )
                    })
                }

            </Form.Select>

        </div>

    )
}

export default List