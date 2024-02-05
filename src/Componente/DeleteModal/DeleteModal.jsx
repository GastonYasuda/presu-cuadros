import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, forEachKey }) => {


    const { deleteCharacteristic } = useContext(cotizador)


    const deleteButton = () => {
        deleteCharacteristic(forEachKey[0])
        setShowDeleteModal(false)
    }

    return (

        <Modal show={showDeleteModal} >
            <Modal.Header>
                <Modal.Title>Eliminar característica?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Seguro desea eliminar {forEachKey[0]}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowDeleteModal(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={deleteButton}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default DeleteModal