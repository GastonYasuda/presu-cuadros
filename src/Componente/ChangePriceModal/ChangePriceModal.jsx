import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';
import { db } from '../../Config/config';
import { doc, updateDoc, getDoc } from 'firebase/firestore';



const ChangePriceModal = ({ setShow, show, titulo, llave, selectedValue }) => {



    const { precioData } = useContext(cotizador)

    const actualizarValorNegro = async () => {
        const documentoRef = doc(db, 'presu', precioData.id);

        let nuevoValor = Number(selectedValue);

        if (titulo === "precio base") {

            await updateDoc(documentoRef, {
                base: nuevoValor
            });

            window.location.reload();


        } else {


            try {
                const documento = await getDoc(documentoRef);

                if (documento !== undefined) {
                    const datosActuales = documento.data();


                    if (datosActuales.precios && datosActuales.precios.length > 0) {
                        let nuevoColor = llave[0]
                        let nuevoValor = Number(selectedValue);


                        for (const key0 in datosActuales.precios) {
                            if (Object.keys(datosActuales.precios[key0])[0] === titulo[0]) {


                                for (const key in datosActuales.precios[key0]) {

                                    for (const key2 in datosActuales.precios[key0][key]) {

                                        if (Object.keys(datosActuales.precios[key0][key][key2])[0] === llave[0]) {

                                            datosActuales.precios[key0][key][key2] = { [nuevoColor]: nuevoValor };

                                            console.log('Datos actuales:', datosActuales.precios[key0][titulo[0]][Object.keys(llave)]);


                                            await updateDoc(documentoRef, datosActuales);

                                            console.log('Valor actualizado exitosamente.');
                                        }
                                    }
                                }
                            }
                        }
                    }
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error al actualizar el valor', error);
            }
        }
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
        </Modal>)
}

export default ChangePriceModal