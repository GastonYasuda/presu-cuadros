import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ChangePriceModal = ({ handleClose, show, selectedValue, llave, titulo }) => {

    useEffect(() => {
        console.log(llave);
    }, [])

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar precio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esta seguro de actualizar {titulo} {llave} a ${selectedValue}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>)
}

export default ChangePriceModal