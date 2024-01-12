import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, InputGroup } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';


const AddNewPriceModal = ({ show, setShow, titulo }) => {

    const { precioData, addNewCharacteristic } = useContext(cotizador)


    const [caracteristicaIngresado, setCaracteristicaIngresado] = useState('')
    const [caracteisticaValor, setCaracteristicaValor] = useState()

    useEffect(() => {
        //  console.log(precioData.precios);
    }, [])


    const getNewCharacteristic = () => {


        addNewCharacteristic(caracteristicaIngresado, caracteisticaValor, titulo)
    }




    return (
        <Modal show={show} >
            <Modal.Header>
                <Modal.Title>Agregar nueva caracteristica</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3" >

                    <FloatingLabel
                        controlId="floatingInput"
                        label={"Nueva caracteristica"}
                        onChange={(e) => { setCaracteristicaIngresado(e.target.value) }}
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
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>)
}

export default AddNewPriceModal