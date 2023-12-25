import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Config/config.js'
import { getDocs, collection } from 'firebase/firestore';



export const cotizador = createContext()

const ApiContext = ({ children }) => {

    const [presu, setPresu] = useState([])
    const [usuario, setUsuario] = useState([])


    useEffect(() => {

        searchCollections("presu", "precio")
        searchCollections("usuario", "usuario")

    }, [])



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

        if (state === "precio") {
            setPresu(datoFirebase[0])
        } else if (state === "usuario")

            setUsuario(datoFirebase[0])

    }




    return (
        <cotizador.Provider value={{ presu, usuario }}>
            {children}
        </cotizador.Provider>
    )
}

export default ApiContext