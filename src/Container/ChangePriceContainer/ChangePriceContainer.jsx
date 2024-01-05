import React, { useContext, useEffect, useState } from 'react'
import { cotizador } from '../../Componente/Context/ApiContext'
import ChangePrice from '../../Componente/ChangePrice/ChangePrice'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ChangePriceContainer = () => {

    const { precioData } = useContext(cotizador)

    useEffect(() => {
        if (precioData !== undefined && precioData.length !== 0) {
        }
    }, [precioData])

    return (
        <div>
            {
                precioData.precios !== undefined &&
                precioData.precios.map((cadaLlave, i) => {
                    return (
                        <div key={i}>
                            <h1>{Object.keys(cadaLlave)}</h1>
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