import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';


const ChangePriceModal = ({ setShow, show, descriptionTitle, forEachKey, selectedValue }) => {

    const { updateValue } = useContext(cotizador)

    const updateInputValue = () => {

        updateValue(descriptionTitle, forEachKey, selectedValue)
        setShow(false)
    };

    return (
        <Modal show={show} className='modalWhere' >
            <Modal.Header>
                <Modal.Title>Actualizar precio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esta seguro de actualizar {descriptionTitle} {forEachKey} a ${selectedValue}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShow(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => { updateInputValue() }}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangePriceModal