import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';
import { db } from '../../Config/config';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';


const ChangePriceModal = ({ setShow, show, selectedValue, llave, titulo }) => {



    const { precioData, changePriceFunction } = useContext(cotizador)

    const [newPrice, setNewPrice] = useState()


    //con esta funcion puedo cambiar la base
    //falta hacerlo dinamico (el ID tiene NO tiene que ser copyPaste)
    const actualizarPrecio = async () => {
        const presuCollection = collection(db, 'presu');
        const presuDoc = doc(presuCollection, 'W2yRgNdFQ0DIN8NTOdLz');

        await updateDoc(presuDoc, {
            blanco: 39
        });

        console.log("actualizado");
    }

    //tengo que buscar para cambiar el array precios (solamente el precio)







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
                <Button variant="primary" onClick={() => { setShow(false) }}>
                    Actualizar
                </Button>
                <Button onClick={actualizarPrecio}>hola</Button>
            </Modal.Footer>
        </Modal>)
}

export default ChangePriceModal