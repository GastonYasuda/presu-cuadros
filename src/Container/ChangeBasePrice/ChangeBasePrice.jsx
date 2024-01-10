import React, { useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ChangePriceModal from '../../Componente/ChangePriceModal/ChangePriceModal';

const ChangeBasePrice = ({ precioData }) => {

    // if (precioData !== undefined) {

    //     console.log(precioData.base)

    //     console.log(Object.keys(precioData));
    //     console.log(precioData);
    // }

    const [cadaKey, setCadaKey] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [myKey, setMyKey] = useState('')

    const [show, setShow] = useState(false);

    const getNewPrice = (e) => {
        // console.log(e.target.value);
        setSelectedValue(e.target.value)
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

                <Button variant="outline-secondary" id="button-addon2" onClick={() => { setShow(true) }} >
                    Actualizar
                </Button>

            </InputGroup>

            <ChangePriceModal setShow={setShow} show={show} selectedValue={selectedValue} titulo={"precio base"} />

        </div>
    )
}

export default ChangeBasePrice