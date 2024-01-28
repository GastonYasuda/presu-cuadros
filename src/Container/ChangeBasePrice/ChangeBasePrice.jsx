import React, { useContext, useEffect, useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ChangePriceModal from '../../Componente/ChangePriceModal/ChangePriceModal';
import Swal from 'sweetalert2';
import { cotizador } from '../../Context/ApiContext';

const ChangeBasePrice = ({ precioData }) => {

    const { sweety, searchCollections } = useContext(cotizador)

    const [selectedValue, setSelectedValue] = useState('');
    const [show, setShow] = useState(false);

    const getNewPrice = (e) => {
        // console.log(e.target.value);
        setSelectedValue(Number(e.target.value))
    }

    const updateIsNum = () => {
        if (isNaN(selectedValue) || selectedValue === '') {
            sweety("ERROR", "Debes ingresar un número", "error")
        } else {
            setShow(true)
        }
    }

    return (
        <div>
            <InputGroup className="mb-3" >

                <InputGroup.Text>Precio base </InputGroup.Text>
                <InputGroup.Text>$</InputGroup.Text>


                <FloatingLabel
                    controlId="floatingInput"
                    label={precioData.base}
                    onChange={(e) => { getNewPrice(e) }}
                >
                    <Form.Control type="" placeholder="" />
                </FloatingLabel>

                <Button variant="outline-secondary" id="button-addon2" onClick={updateIsNum} >
                    Actualizar
                </Button>

            </InputGroup>

            <ChangePriceModal setShow={setShow} show={show} selectedValue={selectedValue} titulo={"precio base"} />

        </div>
    )
}

export default ChangeBasePrice