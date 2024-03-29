import React, { useContext, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { cotizador } from '../../Context/ApiContext';
import './addNewDescriptionModal.css'

const AddNewDescriptionModal = ({ showNewDescriptionModal, setShowNewDescriptionModal }) => {

    const { AddNewDescriptionFn, firstUpper, sweety } = useContext(cotizador)

    const [newDescription, setNewDescription] = useState('')
    const [newCharacteristic, setNewCharacteristic] = useState('')
    const [newValue, setNewValue] = useState()




    const AddDescriptionButton = () => {

        if (newDescription === '') {
            sweety("ERROR", "Debes ingresar nombre de la nueva caracteristica", "error")
        } else if (newCharacteristic === '') {
            sweety("ERROR", "Debes ingresar nombre de la nueva descripción", "error")

        } else if (isNaN(newValue) || newValue === '') {
            sweety("ERROR", "Debes ingresar un número", "error")
        } else {
            AddNewDescriptionFn(newDescription, newCharacteristic, newValue)
            setShowNewDescriptionModal(false)
        }
    }


    return (
        <Modal show={showNewDescriptionModal} className='modalWhere'>
            <Modal.Header>
                <Modal.Title>Agregar nueva descripción</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <InputGroup className='modalLabelStyleContainer'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva DESCRIPCION"}
                        onChange={(e) => { setNewDescription(firstUpper(e.target.value)) }}
                        className='floatInput'
                    >
                        <Form.Control type="" placeholder="" className='form' />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva CARACTERÍSTICA"}
                        onChange={(e) => { setNewCharacteristic(firstUpper(e.target.value)) }}
                        className='floatInput'
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nuevo VALOR"}
                        onChange={(e) => { setNewValue(e.target.value) }}
                        className='floatInput'
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>

                </InputGroup>
            </Modal.Body>


            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowNewDescriptionModal(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={AddDescriptionButton}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default AddNewDescriptionModal
