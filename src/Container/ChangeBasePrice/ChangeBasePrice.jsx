import React, { useContext, useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ChangePriceModal from '../../Componente/ChangePriceModal/ChangePriceModal';
import { cotizador } from '../../Context/ApiContext';
import Card from 'react-bootstrap/Card';
import './changeBasePrice.css'

const ChangeBasePrice = () => {

    const { sweety, dataPriceLocal } = useContext(cotizador)

    const [selectedValue, setSelectedValue] = useState('');
    const [show, setShow] = useState(false);



    const getNewPrice = (e) => {
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
        <>
            <Card className='changeBasePriceCard'>
                <Card.Body>
                    <InputGroup className="mb-3" >

                        <InputGroup.Text>Precio base </InputGroup.Text>
                        <InputGroup.Text>$</InputGroup.Text>


                        <FloatingLabel
                            controlId="floatingInput"
                            label={dataPriceLocal.base}
                            onChange={(e) => { getNewPrice(e) }}
                        >
                            <Form.Control type="" placeholder="" />
                        </FloatingLabel>

                        <Button variant="outline-secondary" id="button-addon2" onClick={updateIsNum} >
                            Actualizar
                        </Button>

                    </InputGroup>

                </Card.Body>
            </Card>


            <ChangePriceModal setShow={setShow} show={show} selectedValue={selectedValue} descriptionTitle={"precio base"} />
        </>
    )
}

export default ChangeBasePrice