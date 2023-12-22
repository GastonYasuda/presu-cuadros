import React, { useEffect, useState } from 'react'
import Listados from '../Listados/Listados';


const ListasDesplegables = ({ datos }) => {

    const [medida, setMedida] = useState([])
    const [material, setMaterial] = useState([])
    const [marco, setMarco] = useState([])
    const [color, setColor] = useState([])

    const [valorMedida, setValorMedida] = useState('')
    const [valorMaterial, setValorMaterial] = useState('')
    const [valorMarco, setValorMarco] = useState('')
    const [valorColor, setValorColor] = useState('')

    //console.log(datos);


    useEffect(() => {
        if (datos.length !== 0) {

            for (const key in datos) {
                //  console.log(datos.medida);

                if (key === "medida") {
                    setMedida(datos.medida)

                    Object.keys(datos).find(e => {
                        if (e === key) {
                            // console.log(e);
                            setValorMedida(e)
                        }
                    })
                } else if (key === "material") {
                    setMaterial(datos.material)

                    Object.keys(datos).find(e => {
                        if (e === key) {
                            // console.log(e);
                            setValorMaterial(e)
                        }
                    })
                } else if (key === "marco") {
                    setMarco(datos.marco)

                    Object.keys(datos).find(e => {
                        if (e === key) {
                            //  console.log(e);
                            setValorMarco(e)
                        }
                    })
                } else if (key === "color") {
                    setColor(datos.color)

                    Object.keys(datos).find(e => {
                        if (e === key) {
                            //  console.log(e);
                            setValorColor(e)
                        }
                    })
                }
            }



        }

    }, [datos])


    return (
        <div>
            <Listados losDatos={medida} valor={valorMedida} />
            <Listados losDatos={material} valor={valorMaterial} />
            <Listados losDatos={marco} valor={valorMarco} />
            <Listados losDatos={color} valor={valorColor} />
        </div>
    )
}

export default ListasDesplegables
