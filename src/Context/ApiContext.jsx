import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Config/config.js'
import { getDocs, collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'



export const cotizador = createContext()

const ApiContext = ({ children }) => {

    const [precioData, setPrecioData] = useState([])
    const [dataPriceLocal, setDataPriceLocal] = useState([])
    const [user, setUser] = useState([])
    const [quoterResult, setQuoterResult] = useState([])
    const [addArray, setAddArray] = useState([])


    useEffect(() => {
        searchCollections("presu", "precioData")
        searchCollections("usuario", "usuario")
    }, [])


    //------------------------------------------------------ADD ARRAY PRICE 


    const addAll = (cotiFinal, precioBase) => {
        const initialValue = precioBase
        const sumWithInitial = cotiFinal.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        )
        setQuoterResult(sumWithInitial)
    }


    //------------------------------------------------------ADD PRICE 


    const addPriceArrayResult = async (characteristic, description) => {

        try {
            const documentRef = doc(db, 'presu', precioData.id)
            const document = await getDoc(documentRef)

            if (document !== undefined) {
                const actualData = document.data()

                for (const key in actualData.precios) {
                    if (Object.keys(actualData.precios[key])[0] === characteristic) {

                        for (const key2 in actualData.precios[key]) {
                            for (const key3 in actualData.precios[key][key2]) {

                                if (actualData.precios[key][key2][key3] === actualData.precios[key][key2][description]) {

                                    const characterEqual = Object.keys(actualData.precios[key])[0]
                                    const descriptionValue = actualData.precios[key][key2][key3]
                                    const newObj = { characterEqual, descriptionValue }

                                    for (const key4 in addArray) {
                                        if (addArray[key4].characterEqual === characteristic) {

                                            addArray.splice(key4, 1);
                                            setAddArray([...addArray, newObj])
                                        }
                                    }
                                    setAddArray([...addArray, newObj])
                                }
                            }
                        }
                    }
                }
                setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))
            }
        } catch (error) {
            console.error('Error adding new characterist', error)
        }
    }


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
                localStorage.setItem('dataPriceLocalStorage', JSON.stringify(datoFirebase[0]))

            } else if (state === "usuario") {
                setUser(datoFirebase[0])
            }

            setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))

        } catch (error) {
            console.log(error)
        }
    }


    //------------------------------------------------------UPDATE VALUE


    const updateValue = async (title, characteristic, selectedValue) => {

        const documentRef = doc(db, 'presu', precioData.id)

        let newValue = Number(selectedValue)

        if (title === "precio base") {

            dataPriceLocal.base = newValue
            await updateDoc(documentRef, {
                base: newValue
            })
            localStorage.setItem('dataPriceLocalStorage', JSON.stringify(dataPriceLocal))


        } else {
            try {
                if (dataPriceLocal.precios && dataPriceLocal.precios.length > 0) {
                    let newCharacteristic = characteristic[0]
                    let newCharacteristicValue = Number(selectedValue)

                    for (const priceArray of dataPriceLocal.precios) {
                        if (Object.keys(priceArray)[0] === title[0]) {

                            for (const key in priceArray) {
                                for (const key2 in priceArray[key]) {
                                    if (Object.keys(priceArray[key][key2])[0] === characteristic[0]) {

                                        priceArray[key][key2] = { [newCharacteristic]: newCharacteristicValue }
                                        await updateDoc(documentRef, dataPriceLocal)
                                        localStorage.setItem('dataPriceLocalStorage', JSON.stringify(dataPriceLocal))
                                    }
                                }
                            }
                        }
                    }
                }
                setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))

            } catch (error) {
                console.error('Error updating value', error)
            }
        }
    }


    //------------------------------------------------------ADD NEW CHARACTERIST


    const addNewCharacteristic = async (inputCharacteristic, characteristicValue, title) => {
        const documentRef = doc(db, 'presu', precioData.id)
        // const document = await getDoc(documentRef)

        try {

            for (const priceArray of dataPriceLocal.precios) {
                if (Object.keys(priceArray)[0] === title[0]) {
                    for (const key in priceArray) {
                        const newObject = { [inputCharacteristic]: Number(characteristicValue) }

                        priceArray[key] = [...priceArray[key], newObject]

                        await setDoc(documentRef, dataPriceLocal)
                        localStorage.setItem('dataPriceLocalStorage', JSON.stringify(dataPriceLocal))
                    }
                }
            }
            setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))

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

                                //  console.log(actualData.precios)
                                await updateDoc(documentRef, { precios: actualData.precios })
                                localStorage.setItem('dataPriceLocalStorage', JSON.stringify(actualData))

                            }
                        }
                    }
                }
                setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))
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
            localStorage.setItem('dataPriceLocalStorage', JSON.stringify(actualData))
            setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))


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
                    localStorage.setItem('dataPriceLocalStorage', JSON.stringify(actualData))
                }
            }
            setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))

        } catch (error) {
            console.error(`Error deleting description`, error)
        }
    }


    //------------------------------------------------------SWEET ALERT


    const sweety = (title, txt, ico) => {
        Swal.fire({
            title: title,
            text: txt,
            icon: ico
        });
    }


    //------------------------------------------------------UPPER CASE


    const firstUpper = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }



    return (
        <cotizador.Provider value={{
            precioData, user, addArray, addPriceArrayResult, addNewCharacteristic, updateValue, deleteCharacteristic,
            AddNewDescriptionFn, deleteDescriptionFn, addAll, quoterResult, sweety, firstUpper, dataPriceLocal, setDataPriceLocal
        }}>
            {children}
        </cotizador.Provider>
    )
}

export default ApiContext