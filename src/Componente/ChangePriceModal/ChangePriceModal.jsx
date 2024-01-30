import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';


const ChangePriceModal = ({ setShow, show, titulo, llave, selectedValue }) => {

    const { updateValue, updateValue2 } = useContext(cotizador)

    const actualizarValorNegro = () => {

        // updateValue(titulo, llave, selectedValue)
        updateValue2(titulo, llave, selectedValue)

        setShow(false)
    };

    return (
        <Modal show={show} >
            <Modal.Header>
                <Modal.Title>Actualizar precio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esta seguro de actualizar {titulo} {llave} a ${selectedValue}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShow(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => { actualizarValorNegro() }}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangePriceModal