import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Config/config.js'
import { getDocs, collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'



export const cotizador = createContext()

const ApiContext = ({ children }) => {

    const [precioData, setPrecioData] = useState([])
    const [user, setUser] = useState([])


    useEffect(() => {

        searchCollections("presu", "precioData")
        searchCollections("usuario", "usuario")

    }, [precioData])


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

        try {

            if (state === "precioData") {
                setPrecioData(datoFirebase[0])

            } else if (state === "usuario") {
                setUser(datoFirebase[0])
            }
        } catch (error) {
            console.log(error)
        }
    }


    //------------------------------------------------------UPDATE VALUE


    const updateValue = async (title, characteristic, selectedValue) => {

        const documentRef = doc(db, 'presu', precioData.id)

        let newValue = Number(selectedValue)

        if (title === "precio base") {

            await updateDoc(documentRef, {
                base: newValue
            })

        } else {
            try {
                const document = await getDoc(documentRef)

                if (document !== undefined) {
                    const actualData = document.data()

                    if (actualData.precios && actualData.precios.length > 0) {
                        let newCharacteristic = characteristic[0]
                        let newCharacteristicValue = Number(selectedValue)

                        for (const priceArray of actualData.precios) {
                            if (Object.keys(priceArray)[0] === title[0]) {

                                for (const key in priceArray) {
                                    for (const key2 in priceArray[key]) {

                                        if (Object.keys(priceArray[key][key2])[0] === characteristic[0]) {

                                            priceArray[key][key2] = { [newCharacteristic]: newCharacteristicValue }
                                            await updateDoc(documentRef, actualData)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Error updating value', error)
            }
        }
    }


    //------------------------------------------------------ADD NEW CHARACTERIST


    const addNewCharacteristic = async (inputCharacteristic, characteristicValue, title) => {
        const documentRef = doc(db, 'presu', precioData.id)

        try {
            const document = await getDoc(documentRef)

            if (document !== undefined) {
                const actualData = document.data()

                for (const priceArray of actualData.precios) {
                    if (Object.keys(priceArray)[0] === title[0]) {
                        for (const key in priceArray) {
                            const newObject = { [inputCharacteristic]: Number(characteristicValue) }

                            priceArray[key] = [...priceArray[key], newObject]

                            await setDoc(documentRef, actualData)
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error adding new characterist', error)
        }
    }


    //------------------------------------------------------DELETE CHARACTERIST



    const deleteCharacteristic = async (characteristic) => {
        const documentRef = doc(db, 'presu', precioData.id)
        const document = await getDoc(documentRef)

        try {
            const actualData = document.data()

            if (characteristic !== undefined) {
                for (const key in actualData.precios) {
                    for (const key2 in actualData.precios[key]) {
                        for (const key3 in actualData.precios[key][key2]) {

                            if (Object.keys(actualData.precios[key][key2][key3])[0] === characteristic) {

                                actualData.precios[key][key2].splice(key3, 1)

                                console.log(actualData.precios)
                                await updateDoc(documentRef, { precios: actualData.precios })
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error(`Error deleting characterist`, error)
        }
    }


    //------------------------------------------------------ADD NEW DESCRIPTION


    const AddNewDescriptionFn = async (newDescription, newCharacteristic, newValue) => {

        const documentRef = doc(db, 'presu', precioData.id)
        const document = await getDoc(documentRef)

        let arrayContainer = {}

        try {
            const actualData = document.data()

            arrayContainer[newDescription] = [{ [newCharacteristic]: Number(newValue) }]

            actualData.precios = [...actualData.precios, arrayContainer]

            await setDoc(documentRef, actualData)

        } catch (error) {
            console.error(`Error adding new description`, error)
        }
    }


    //------------------------------------------------------DELETE DESCRIPTION


    const deleteDescriptionFn = async (title) => {
        const documentRef = doc(db, 'presu', precioData.id)
        const document = await getDoc(documentRef)

        try {
            const actualData = document.data()

            for (const key in actualData.precios) {
                if (Object.keys(actualData.precios[key])[0] === title[0]) {
                    actualData.precios.splice(key, 1)

                    await updateDoc(documentRef, actualData)
                }
            }
        } catch (error) {
            console.error(`Error deleting description`, error)
        }
    }



    return (
        <cotizador.Provider value={{
            precioData, user, addNewCharacteristic, updateValue, deleteCharacteristic,
            AddNewDescriptionFn, deleteDescriptionFn
        }}>
            {children}
        </cotizador.Provider>
    )
}

export default ApiContext