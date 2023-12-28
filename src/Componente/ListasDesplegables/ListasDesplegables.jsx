import React, { useEffect, useState } from 'react'
import Listados from '../Listados/Listados';

const ListasDesplegables = ({ presu }) => {


    const [paraSumar, setParaSumar] = useState([])

    useEffect(() => {
        if (presu.precios !== undefined) {
            if (paraSumar.length === presu.precios.length) {

                console.log(paraSumar);

            }
        }
    }, [paraSumar])

    return (
        <div>
            {
                presu.precios !== undefined &&
                presu.precios.map((cadaPresu, i) => {

                    return (
                        <Listados key={i} lista={cadaPresu} paraSumar={paraSumar} setParaSumar={setParaSumar} />
                    )
                })
            }

            <button>COTIZAR</button>
        </div >
    )
}

export default ListasDesplegables
