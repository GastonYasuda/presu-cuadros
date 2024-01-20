import React, { Fragment, useEffect, useState } from 'react'
import List from '../List/List';

const ListSelect = ({ paraSumar, setParaSumar, categoria, datosParaSumar, setDatosParaSumar, precioBase, setResultado }) => {


    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    const [descripcionSeleccionada, setDescripcionSeleccionada] = useState()



    const sumarTodo = (cotiFinal, precioBase) => {
        const initialValue = precioBase;
        const sumWithInitial = cotiFinal.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );

        setResultado(sumWithInitial)
    }



    const buscarItemSeleccionado = (item, descripcion) => {

        const itemPrecioSeleccionado = categoria[item][descripcion]
        const productoPrecio = (Object.keys(categoria), itemPrecioSeleccionado)
        const category = Object.keys(categoria)
        const creoObjeto = { category, productoPrecio }

        setDatosParaSumar((prevSuma) => [...prevSuma, creoObjeto]);

        for (const key in datosParaSumar) {

            // console.log(Object.keys(categoria)[0]);
            //console.log(datosParaSumar[key].cat[0]);

            if (Object.keys(categoria)[0] === datosParaSumar[key].category[0]) {

                // console.log("hola");
                setParaSumar([])
                const indiceAQuitar = [key];
                datosParaSumar.splice(indiceAQuitar, 1);


                setDatosParaSumar([...datosParaSumar, creoObjeto]);

            }

        }

    }


    useEffect(() => {
        if (paraSumar.length !== 0) {

            console.log(paraSumar);
            sumarTodo(paraSumar, precioBase)

        }
    }, [paraSumar, datosParaSumar])





    useEffect(() => {

        if (categoriaSeleccionada !== undefined && descripcionSeleccionada !== undefined) {
            // console.log(categoriaSeleccionada);
            //console.log(descripcionSeleccionada);

            buscarItemSeleccionado(categoriaSeleccionada, descripcionSeleccionada)
        }


    }, [categoriaSeleccionada, descripcionSeleccionada])



    // useEffect(() => {
    //     if (itemSeleccionado !== undefined) {
    //         console.log(itemSeleccionado);
    //     }
    // }, [itemSeleccionado])



    return (


        <div>

            {
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
            }
        </div>
    )
}

export default ListSelect
