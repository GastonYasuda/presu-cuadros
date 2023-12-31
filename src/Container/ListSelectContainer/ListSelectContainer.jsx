import React, { Fragment, useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import { cotizador } from '../../Componente/Context/ApiContext'

const ListSelectContainer = () => {


    const { precioData } = useContext(cotizador)

    const [categorias, setCategorias] = useState([])

    const [datosParaSumar, setDatosParaSumar] = useState([])
    const [paraSumar, setParaSumar] = useState([]) //solo guardo los montos para que me sumen
    const [resultado, setResultado] = useState()


    const sumarTodo = (cotiFinal) => {
        const initialValue = precioData.base;
        const sumWithInitial = cotiFinal.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );

        setResultado(sumWithInitial)
    }





    useEffect(() => {
        if (precioData !== undefined && precioData.length !== 0) {
            //  console.log(precioData);

            setCategorias(precioData.precios)
            //  console.log(precioData.precios);
        }

        if (datosParaSumar.length !== 0 && precioData.precios.length === datosParaSumar.length) {
            //   console.log(datosParaSumar);
         
            for (const key in datosParaSumar) {
                // console.log(datosParaSumar[key].productoPrecio);
                // const select = (datosParaSumar[key].productoPrecio);
                // const selectValue = datosParaSumar[key].productoPrecio[Object.keys(select)]


                // setParaSumar([...paraSumar, selectValue]);


                // Obtén el objeto productoPrecio
                const productoPrecio = datosParaSumar[key].productoPrecio;

                // Supongo que deseas obtener el valor asociado a la primera clave del objeto productoPrecio
                const primeraClave = Object.keys(productoPrecio)[0];
                const selectValue = productoPrecio[primeraClave];

                // Agrega el nuevo elemento al array paraSumar
                
                setParaSumar(prevParaSumar => [...prevParaSumar, selectValue]);
              

            }





        }



    }, [precioData, categorias, datosParaSumar])



    return (
        <div>
            <h1>HOLA PRESU!</h1>
            {
                categorias !== undefined &&
                categorias.map((categoria, i) => {
                    return (
                        <Fragment key={i}>
                            <ListSelect paraSumar={paraSumar} categoria={categoria} datosParaSumar={datosParaSumar} setDatosParaSumar={setDatosParaSumar} />
                        </Fragment>
                    )

                })

            }
            {/* <h1>{resultado}</h1> */}

        </div>
    )
}

export default ListSelectContainer
