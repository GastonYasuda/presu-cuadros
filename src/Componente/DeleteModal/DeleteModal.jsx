import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, llave, titulo }) => {


    const { deleteCharacteristic, precioData } = useContext(cotizador)

    const [queUbicacion, setQueUbicacion] = useState()


    const deleteButton = () => {


        deleteCharacteristic(llave[0])
        setShowDeleteModal(false)
    }

    return (

        <Modal show={showDeleteModal} >
            <Modal.Header>
                <Modal.Title>Eliminar caracteristica?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Seguro desea eliminar {llave[0]}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowDeleteModal(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={deleteButton}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default DeleteModal