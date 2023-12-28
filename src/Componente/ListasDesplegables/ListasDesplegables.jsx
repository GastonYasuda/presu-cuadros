import React, { useEffect, useState } from 'react'
import Listados from '../Listados/Listados';

const ListasDesplegables = ({ presu }) => {


    const [paraSumar, setParaSumar] = useState([])

    const [cotiFinal, setCotiFinal] = useState([])
    const [resultado, setResultado] = useState()


    const sumarTodo = (cotiFinal) => {
        const initialValue = presu.base;
        const sumWithInitial = cotiFinal.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );

        setResultado(sumWithInitial)
    }

    // const resetSelectores = () => {
    //     setResultado()
    // }

    useEffect(() => {
        if (presu.precios !== undefined) {
            if (paraSumar.length === presu.precios.length) {

                for (const key in paraSumar) {
                    const valorParaSumar = Object.keys(paraSumar[key].productoPrecio)[0]
                    const llaveParaSumar = paraSumar[key].productoPrecio[valorParaSumar]
                    setCotiFinal((prevSuma) => [...prevSuma, llaveParaSumar])
                    // console.log(llaveParaSumar);

                }
            }
        }
    }, [paraSumar])

    useEffect(() => {
        sumarTodo(cotiFinal)
    }, [cotiFinal])

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
            <h4>{resultado}</h4> 
            <button >COTIZAR</button>
        </div >
    )
}

export default ListasDesplegables
