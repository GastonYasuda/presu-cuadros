import React, { useContext, useEffect } from 'react'
import { cotizador } from '../../Componente/Context/ApiContext'
import ChangePrice from '../../Componente/ChangePrice/ChangePrice'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChangeBasePrice from '../ChangeBasePrice/ChangeBasePrice';
import AddNewPrice from '../../Componente/AddNewPrice/AddNewPrice';


const ChangePriceContainer = () => {


    const { precioData } = useContext(cotizador)

    useEffect(() => {
        if (precioData !== undefined && precioData.length !== 0) {
        }
    }, [precioData])



    return (
        <div>
            <h1>CAMBIAR PRECIOS!!</h1>
            <ChangeBasePrice precioData={precioData} />
            {
                precioData.precios !== undefined &&
                precioData.precios.map((cadaLlave, i) => {
                    return (
                        <div key={i} >
                            <h1>{Object.keys(cadaLlave)}</h1>
                            <AddNewPrice titulo={Object.keys(cadaLlave)} />
                            <ChangePrice cadaLlave={cadaLlave} />
                        </div>
                    )
                })
            }
            <Button variant="primary">
                <Link to='/' style={{ color: '#ffff', textDecoration: 'none' }}>Back</Link>
            </Button >

        </div >
    )
}

export default ChangePriceContainer