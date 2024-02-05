import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, InputGroup } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';


const AddNewPriceModal = ({ show, setShow, myTitle }) => {

    const { addNewCharacteristic, sweety, firstUpper } = useContext(cotizador)


    const [caracteristicaIngresado, setCaracteristicaIngresado] = useState('')
    const [caracteisticaValor, setCaracteristicaValor] = useState()


    const getNewCharacteristic = () => {

        if (caracteristicaIngresado === '') {
            sweety("ERROR", "Debes ingresar nombre de la nueva característica", "error")

        } else if (isNaN(caracteisticaValor) || caracteisticaValor === '') {
            sweety("ERROR", "Debes ingresar un número", "error")

        } else {
            addNewCharacteristic(caracteristicaIngresado, caracteisticaValor, myTitle)
            setShow(false)
        }
    }


    return (
        <Modal show={show}  >

            <Modal.Header>
                <Modal.Title>Agregar nueva descripción de {myTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputGroup className="mb-3" >
                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva característica"}
                        onChange={(e) => { setCaracteristicaIngresado(firstUpper(e.target.value)) }}
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Ingrese su valor"}
                        onChange={(e) => { setCaracteristicaValor(e.target.value) }}
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>
                </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShow(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={getNewCharacteristic}>
                    Agregar
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default AddNewPriceModal