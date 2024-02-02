import React, { Fragment, useContext, useEffect, useState } from 'react'
import AddNewPrice from '../AddNewPrice/AddNewPrice';
import DeletePrice from '../DeletePrice/DeletePrice';
import ChangePrice from '../ChangePrice/ChangePrice';
import { cotizador } from '../../Context/ApiContext';

const ChangePriceListContainer = () => {


    const { precioDataLocal } = useContext(cotizador)

    // useEffect(() => {
    //     //  console.log(precioDataLocal);
    //     setPrecioDataLocal(JSON.parse(localStorage.getItem('HOLA')))
    //     //console.log(JSON.parse(localStorage.getItem('HOLA')));

    // }, [])


    useEffect(() => {

        // setPrecioDataLocal(JSON.parse(localStorage.getItem('HOLA')))

        // if (precioDataLocal !== undefined) {
        //     for (const key in precioDataLocal.precios) {
        //         console.log(precioDataLocal.precios[key]);

        //  const item = JSON.parse(localStorage.getItem('HOLA'))

        //     }
        // }
        //  setHola(item)

    }, [])

    return (
        <Fragment>
            {
                precioDataLocal.precios !== undefined &&
                precioDataLocal.precios.map((cadaLlave, i) => {
                    return (
                        <Fragment key={i} >
                            <h1>{(Object.keys(cadaLlave))}</h1>
                            <AddNewPrice titulo={Object.keys(cadaLlave)} />
                            <DeletePrice titulo={Object.keys(cadaLlave)} />
                            <ChangePrice cadaLlave={cadaLlave} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default ChangePriceListContainer
