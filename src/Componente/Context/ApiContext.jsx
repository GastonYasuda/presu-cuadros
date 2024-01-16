import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Config/config.js'
import { getDocs, collection, doc, setDoc, getDoc } from 'firebase/firestore';



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

               // miComponenteRef.current && miComponenteRef.current.forceUpdate();

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