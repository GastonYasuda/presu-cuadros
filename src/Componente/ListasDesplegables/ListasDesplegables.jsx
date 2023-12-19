import React, { useEffect, useState } from 'react'
import Listados from '../Listados/Listados';


const ListasDesplegables = ({ datos }) => {

    const [medida, setMedida] = useState([])
    const [material, setMaterial] = useState([])
    const [marco, setMarco] = useState([])


    useEffect(() => {
        if (Object.keys(datos).length !== 0) {
            console.log(typeof (datos));
            console.log(datos);

            for (const key in Object.keys(datos)) {
                if (Object.keys(datos)[key] === 'medida') {
                    setMedida(Object.keys(datos)[key])
                    //  console.log("medida");

                } else if (Object.keys(datos)[key] === 'material') {
                    setMaterial(Object.keys(datos)[key])
                    //  console.log("material");

                } else if (Object.keys(datos)[key] === 'marco') {
                    setMarco(Object.keys(datos)[key])
                    // console.log("marco");

                }
            }

            // console.log(Object.keys(datos)[1]);
        console.log(medida);
        }

    }, [datos, medida, material, marco])


    return (
        <div>
            <Listados losDatos={medida} />
            <Listados losDatos={material} />
            <Listados losDatos={marco} />
        </div>
    )
}

export default ListasDesplegables
