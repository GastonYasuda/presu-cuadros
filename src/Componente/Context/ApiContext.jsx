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
                            console.log(datosActuales.precios[key]);

                            console.log(datosActuales.precios[key][key2]);

                            // Crear un nuevo objeto
                            const nuevo = { [caracteristicaIngresado]: caracteisticaValor };

                            // Agregar el nuevo objeto al mapa datosActuales.precios[key]
                            datosActuales.precios[key][key2] = [nuevo]
                            // Actualizar el documento en Firestore
                            await setDoc(documentoRef, datosActuales);
                        }
                    }

                }


                //     for (const key0 in datosActuales.precios) {
                //         if (Object.keys(datosActuales.precios[key0])[0] === titulo[0]) {


                //             for (const key in datosActuales.precios[key0]) {

                //                 for (const key2 in datosActuales.precios[key0][key]) {

                //                     if (Object.keys(datosActuales.precios[key0][key][key2])[0] === llave[0]) {

                //                         datosActuales.precios[key0][key][key2] = { [nuevoColor]: nuevoValor };

                //                         console.log('Datos actuales:', datosActuales.precios[key0][titulo[0]][Object.keys(llave)]);


                //                         await updateDoc(documentoRef, datosActuales);

                //                         console.log('Valor actualizado exitosamente.');
                //                     }
                //                 }
                //             }
                //         }
                //     }

                // window.location.reload();
            }
        } catch (error) {
            console.error('Error al actualizar el valor', error);
        }
    };



    return (
        <cotizador.Provider value={{ precioData, usuario, addNewCharacteristic }}>
            {children}
        </cotizador.Provider>
    )
}

export default ApiContext