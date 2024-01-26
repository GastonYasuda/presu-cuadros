import React, { Fragment, useContext, useEffect, useState } from 'react'
import List from '../List/List';
import { cotizador } from '../Context/ApiContext';

const ListSelect = ({ description }) => {

    const { addPriceArrayResult } = useContext(cotizador)

    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCharacteristic, setSelectedCharacteristic] = useState()

    useEffect(() => {

        if (selectedCharacteristic !== undefined && selectedDescription !== undefined) {

            addPriceArrayResult(selectedCharacteristic, selectedDescription);
        }

    }, [selectedCharacteristic, selectedDescription])


    // const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    // const [descripcionSeleccionada, setDescripcionSeleccionada] = useState()



    // const sumarTodo = (cotiFinal, precioBase) => {
    //     const initialValue = precioBase;
    //     const sumWithInitial = cotiFinal.reduce(
    //         (accumulator, currentValue) => accumulator + currentValue,
    //         initialValue,
    //     );

    //     setResultado(sumWithInitial)
    // }




    const buscarItemSeleccionado = (item, descripcion) => {



        // const itemPrecioSeleccionado = description[item][descripcion]
        // const productoPrecio = (Object.keys(description), itemPrecioSeleccionado)
        // const category = Object.keys(description)
        // const creoObjeto = { category, productoPrecio }

        // setDatosParaSumar((prevSuma) => [...prevSuma, creoObjeto]);*******

        // for (const key in datosParaSumar) {

        //     // console.log(Object.keys(description)[0]);
        //     //console.log(datosParaSumar[key].cat[0]);

        //     if (Object.keys(description)[0] === datosParaSumar[key].category[0]) {

        //         console.log("hola");
        //         setParaSumar([])
        //         const indiceAQuitar = [key];
        //         datosParaSumar.splice(indiceAQuitar, 1);


        //         setDatosParaSumar([...datosParaSumar, creoObjeto]);

        //     }

        // }


    }


    // useEffect(() => {
    //     if (paraSumar.length !== 0) {

    //         console.log(paraSumar);
    //         sumarTodo(paraSumar, precioBase)

    //     }
    // }, [paraSumar, datosParaSumar])





    // useEffect(() => {

    //     if (categoriaSeleccionada !== undefined && descripcionSeleccionada !== undefined) {
    //         // console.log(categoriaSeleccionada);
    //         //console.log(descripcionSeleccionada);

    //         buscarItemSeleccionado(categoriaSeleccionada, descripcionSeleccionada)
    //     }


    // }, [categoriaSeleccionada, descripcionSeleccionada])




    return (


        <div>
            {
                Object.keys(description).map((characteristic, i) => {
                    return (
                        <List key={i}
                            description={description}
                            characteristic={characteristic}
                            descriptionValue={description[characteristic]}
                            setSelectedDescription={setSelectedDescription}
                            setSelectedCharacteristic={setSelectedCharacteristic}
                        />
                    )
                })
            }


            {/* {
                Object.keys(categoria).map((cadaCat, i) => {
                    return (
                        <List key={i}
                            tituloCat={cadaCat}
                            valorCat={categoria[cadaCat]}
                            setCategoriaSeleccionada={setCategoriaSeleccionada}
                            setDescripcionSeleccionada={setDescripcionSeleccionada}
                        />
                    )
                })
            } */}
        </div>
    )
}

export default ListSelect
