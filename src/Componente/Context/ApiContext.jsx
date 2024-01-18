import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Config/config.js'
import { getDocs, collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';



export const cotizador = createContext()

const ApiContext = ({ children }) => {

    const [precioData, setPrecioData] = useState([])

    const [usuario, setUsuario] = useState([])




    useEffect(() => {

        searchCollections("presu", "precioData")
        searchCollections("usuario", "usuario")

    }, [])


    //------------------------------------------------------SEARCH COLLECTION

    const searchCollections = async (nameCollection, state) => {

        const querySnapshot = await getDocs(collection(db, nameCollection))
        const datoFirebase = []
        querySnapshot.forEach((doc) => {

            const dato = {
                id: doc.id,
                ...doc.data()
            }

            datoFirebase.push(dato)
        })

        if (state === "precioData") {
            setPrecioData(datoFirebase[0])

        } else if (state === "usuario")
            setUsuario(datoFirebase[0])
    }


    //------------------------------------------------------ADD NEW CHARACTERISTIC




    const addNewCharacteristic = async (caracteristicaIngresado, caracteisticaValor, titulo) => {
        const documentoRef = doc(db, 'presu', precioData.id);


        try {
            const documento = await getDoc(documentoRef);


            if (documento !== undefined) {
                const datosActuales = documento.data();

                // console.log(datosActuales);
                // console.log(datosActuales.precios);

                for (const key in datosActuales.precios) {
                    // console.log(Object.keys(datosActuales.precios[key])[0]);
                    //console.log(titulo[0]);
                    if (Object.keys(datosActuales.precios[key])[0] === titulo[0]) {
                        //console.log(`hola! soy ${Object.keys(datosActuales.precios[key])[0]}`);
                        for (const key2 in datosActuales.precios[key]) {
                            // console.log(datosActuales.precios[key]);

                            //.log(datosActuales.precios[key][key2]);

                            // Crear un nuevo objeto
                            const nuevo = { [caracteristicaIngresado]: Number(caracteisticaValor) };

                            // Agregar el nuevo objeto al mapa datosActuales.precios[key]
                            datosActuales.precios[key][key2] = [...datosActuales.precios[key][key2], nuevo]
                            // Actualizar el documento en Firestore

                            console.log(documentoRef, datosActuales);
                            await setDoc(documentoRef, datosActuales);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error al actualizar el valor', error);
        }
    };

    const deleteCharacteristic = async (characteristic) => {
        const documentoRef = doc(db, 'presu', precioData.id);
        const documento = await getDoc(documentoRef);

        // console.log(`Borramos desde apicontex ${characteristic}`);
        try {
            const datosActuales = documento.data();

            if (characteristic !== undefined) {
                for (const key in datosActuales.precios) {
                    //  console.log(Object.keys(datosActuales.precios[key])[0]);
                    for (const key2 in datosActuales.precios[key]) {
                        for (const key3 in datosActuales.precios[key][key2]) {

                            // if (Object.keys(datosActuales.precios[key][key2][key3])[0] === characteristic) {
                            //     console.log(`Hola! Soy ${Object.keys(datosActuales.precios[key][key2][key3])[0]} y estoy en la posición ${key3} de ${Object.keys(datosActuales.precios[key])[0]}`);

                            //     // Eliminar el elemento del array
                            //     datosActuales.precios[key][key2].splice([key3], 1);

                            //     console.log(datosActuales.precios[key][key2]);


                            //     // Actualizar el documento en Firestore
                            //     await updateDoc(datosActuales,
                            //         datosActuales.precios[key][key2]
                            //     );
                            // }
                            if (Object.keys(datosActuales.precios[key][key2][key3])[0] === characteristic) {
                                console.log(`Hola! Soy ${Object.keys(datosActuales.precios[key][key2][key3])[0]} y estoy en la posición ${key3} de ${Object.keys(datosActuales.precios[key])[0]}`);

                                // Eliminar el elemento del array
                                datosActuales.precios[key][key2].splice(key3, 1);

                                console.log(datosActuales.precios[key][key2]);


                                datosActuales.precios[key][key2] = [...datosActuales.precios[key][key2]]
                                // Actualizar el documento en Firestore

                                console.log(documentoRef, datosActuales);
                                await setDoc(documentoRef, datosActuales);
                            }
                        }
                    }
                }
            }

        } catch (error) {
            console.error(`Error`, error)
        }
    }

    const AddNewDescriptionFn = () => {
        console.log("agregamos de apiContext");
        //tengo que hacer como addNewCharacteristic y actualizar todo el array con la nueva caracteristica agregada


        // Supongamos que tienes un array existente
        let miArray = [{ nombre: 'Ejemplo1', edad: 25 }, { nombre: 'Ejemplo2', edad: 30 }];

        // Nuevo objeto que quieres agregar
        let nuevoObjeto = { nombre: 'Ejemplo3', edad: 22 };

        // Obtener la longitud actual del array
        let longitudAnterior = miArray.length;

        // Asignar el nuevo objeto directamente al índice correspondiente
        miArray[longitudAnterior] = nuevoObjeto;

        // Mostrar el array después de la adición
        console.log(miArray);



    }



    return (
        <cotizador.Provider value={{
            precioData, usuario, addNewCharacteristic, deleteCharacteristic,
            AddNewDescriptionFn
        }}>
            {children}
        </cotizador.Provider>
    )
}

export default ApiContext