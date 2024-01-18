import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';

const AddNewDescriptionModal = ({ showNewDescriptionModal, setShowNewDescriptionModal }) => {

    const { AddNewDescriptionFn } = useContext(cotizador)

    const AddDescriptionButton = () => {


        AddNewDescriptionFn()
        setShowNewDescriptionModal(false)
    }


    return (
        <Modal show={showNewDescriptionModal} >
            <Modal.Header>
                <Modal.Title>Agregar nueva descripcion</Modal.Title>
            </Modal.Header>
            <Modal.Body>ACA IRIA NOMBRE DE DESCRIPCION</Modal.Body>
            <Modal.Body>ACA IRIA CARACTERISTICA</Modal.Body>
            <Modal.Body>ACA IRIA PRECIO</Modal.Body>

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
