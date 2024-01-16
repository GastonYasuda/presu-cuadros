import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ showDeleteModal, setShowDeleteModal }) => {

    if (showDeleteModal) {
        console.log("estoy");
    }

    return (

        <Modal show={showDeleteModal} >
            <Modal.Header>
                <Modal.Title>Eliminar caracteristica?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Seguro desea eliminar blablabla?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowDeleteModal(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => { setShowDeleteModal(false) }}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default DeleteModal