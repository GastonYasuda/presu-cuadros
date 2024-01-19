import React, { useContext, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const AddNewDescriptionModal = ({ showNewDescriptionModal, setShowNewDescriptionModal }) => {

    const { AddNewDescriptionFn } = useContext(cotizador)

    const [newDescription, setNewDescription] = useState('')
    const [newCharacteristic, setNewCharacteristic] = useState('')
    const [newValue, setNewValue] = useState()


    const AddDescriptionButton = () => {

        AddNewDescriptionFn(newDescription, newCharacteristic, newValue)
        setShowNewDescriptionModal(false)
    }


    return (
        <Modal show={showNewDescriptionModal} >
            <Modal.Header>
                <Modal.Title>Agregar nueva descripcion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3" >
                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva DESCRIPCION"}
                        onChange={(e) => { setNewDescription(e.target.value) }}
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva CARACTERISTICA"}
                        onChange={(e) => { setNewCharacteristic(e.target.value) }}
                    >
                        <Form.Control type="" placeholder="" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nuevo VALOR"}
                        onChange={(e) => { setNewValue(e.target.value) }}
                    >
                        <Form.Control type="texto" placeholder="holaaaaa" />
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
