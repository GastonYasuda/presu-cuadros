import React, { Fragment, useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import { cotizador } from '../../Componente/Context/ApiContext'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ListSelectContainer = () => {


    const { precioData } = useContext(cotizador)

    // const [categorias, setCategorias] = useState([])

    // const [datosParaSumar, setDatosParaSumar] = useState([])
    // const [paraSumar, setParaSumar] = useState([]) //solo guardo los montos para que me sumen
    // const [resultado, setResultado] = useState()




    // useEffect(() => {
    //     if (precioData !== undefined && precioData.length !== 0) {

    //         setCategorias(precioData.precios)

    //     }

    //     if (datosParaSumar.length !== 0 && precioData.precios.length === datosParaSumar.length) {
    //         console.log(datosParaSumar);

    //         for (const key in datosParaSumar) {

    //             const productoPrecio = datosParaSumar[key].productoPrecio;

    //             const primeraClave = Object.keys(productoPrecio)[0];
    //             const selectValue = productoPrecio[primeraClave];


    //             setParaSumar(prevParaSumar => [...prevParaSumar, selectValue]);
    //         }
    //     }


    // }, [precioData, categorias, datosParaSumar])



    return (
        <div>
            <h1>HOLA PRESU!</h1>
            <h6>Precio Base: ${precioData.base} -</h6>


            {/* {
                categorias !== undefined &&
                categorias.map((categoria, i) => {
                    return (
                        <Fragment key={i}>
                            <ListSelect paraSumar={paraSumar} setParaSumar={setParaSumar}
                                categoria={categoria} datosParaSumar={datosParaSumar} setDatosParaSumar={setDatosParaSumar}
                                setResultado={setResultado} precioBase={precioData.base} />
                        </Fragment>
                    )
                })
            } */}

            {
                precioData.precios !== undefined &&
                precioData.precios.map((description, i) => {
                    return (
                        <ListSelect key={i} description={description} />
                    )
                })
            }









            {/* 
            {
                resultado !== undefined &&
                <h1>Cotización Final: ${resultado}-</h1>
            } */}

            <br />
            <br />

            <Button variant="primary">
                <Link to='/update-price' style={{ color: '#ffff', textDecoration: 'none' }}>Change Price</Link>
            </Button >


        </div >
    )
}

export default ListSelectContainer
