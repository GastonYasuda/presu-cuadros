import React, { useContext, useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ChangePriceModal from '../../Componente/ChangePriceModal/ChangePriceModal';
import Card from 'react-bootstrap/Card';
import './changeBasePrice.css'
import { cotizador } from '../../Context/ApiContext';
import ChangeTitleModal from '../../Componente/ChangeTitleModal/ChangeTitleModal';


const ChangeTitle = () => {

    const { sweety, dataPriceLocal } = useContext(cotizador)

    const [selectedValue, setSelectedValue] = useState('');
    const [show, setShow] = useState(false);

    
    const getNewPrice = (e) => {
        setSelectedValue(e.target.value)
    }
    const updateIsNum = () => {
        if (isNaN(selectedValue) || selectedValue === '') {
            setShow(true)
        } else {
            sweety("ERROR", "Debes ingresar el título", "error")
        }
    }
    
  return (
    <>
    <Card className='changeBasePriceCard'>
        <Card.Body>
            <InputGroup className="mb-3" >
            
                <InputGroup.Text>Producto a presupuestar: </InputGroup.Text>


                <FloatingLabel
                    controlId="floatingInput"
                    label={dataPriceLocal.titulo}
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


    <ChangeTitleModal setShow={setShow} show={show} selectedValue={selectedValue} descriptionTitle={"titulo"} />
</>
  )
}

export default ChangeTitle