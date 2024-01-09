import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../Context/ApiContext';
import { db } from '../../Config/config';
import { collection, doc, query, where, updateDoc, setDoc, getDocs, getDoc } from 'firebase/firestore';



const ChangePriceModal = ({ setShow, show, titulo, llave, selectedValue }) => {



    const { precioData, changePriceFunction } = useContext(cotizador)

    const [newPrice, setNewPrice] = useState({})


    useEffect(() => {
        //console.log(Object.keys(titulo)[0]);//medida/color
        //console.log(Object.keys(llave));//negro/blanco/10x10/20x20
        // console.log(selectedValue);//valor ingresado
    }, [llave])



    const actualizarValorNegro = async () => {

        const documentoRef = doc(db, 'presu', precioData.id);

        try {
            // Obtener el documento actual
            const documento = await getDoc(documentoRef);

            if (documento.exists()) {
                // Obtener los datos actuales
                const datosActuales = documento.data();

                // Verificar si existe "precios" y tiene al menos un elemento
                if (datosActuales.precios && datosActuales.precios.length > 0) {
                    // Verificar si existe "color" en precios[0]
                    if (datosActuales.precios[0][Object.keys(titulo)[0]]) {
                        // Reemplazar el valor de "negro" en precios[0]["color"]

                        let nuevoColor = llave[0]
                        let nuevoValor = selectedValue;

                        // console.log(datosActuales.precios);

                        for (const key in datosActuales.precios) {
                            //console.log(Object.keys(datosActuales.precios[0][Object.keys(titulo)][key])[0]);
                            //console.log(llave[0]);
                            if (Object.keys(datosActuales.precios[0][Object.keys(titulo)][key])[0] === llave[0]) {
                                console.log(`Hola! soy ${llave[0]}`);//negro


                                //TENGO QUE VER EN QUE POSISION ESTA BLANCO Y QUE POSICION ESTA NEGRO con KEY!!
                                //.log(datosActuales.precios[0][Object.keys(titulo)][key]);

                                datosActuales.precios[0][Object.keys(titulo)][key] = { [nuevoColor]: nuevoValor };

                                //   datosActuales.precios[0][Object.keys(titulo)[0]][Object.keys(titulo)][Object.keys(llave)] = { [nuevoColor]: nuevoValor }; //color[1] tiene que ser dinamico----- negro: tambien-----el valor 15 tambien
                                console.log('Datos actuales:', datosActuales.precios[0][Object.keys(titulo)[0]][Object.keys(llave)]);


                                // Actualizar el documento con los nuevos datos
                                await updateDoc(documentoRef, datosActuales);

                                console.log('Valor de "negro" en precios[0]["color"] actualizado exitosamente.');



                            }
                        }



                    } else {
                        console.log('El campo "color" no existe en precios[0].');
                    }
                } else {
                    console.log('El campo "precios" no existe o está vacío.');
                }
            } else {
                console.log('El documento no existe.');
            }
        } catch (error) {
            console.error('Error al actualizar el valor de "negro":', error);
        }
    };






    return (
        <Modal show={show} >
            <Modal.Header>
                <Modal.Title>Actualizar precio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esta seguro de actualizar {Object.keys(titulo)} {llave} a ${selectedValue}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShow(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => { setShow(false) }}>
                    Actualizar
                </Button>
                <Button onClick={actualizarValorNegro}>hola</Button>
            </Modal.Footer>
        </Modal>)
}

export default ChangePriceModal