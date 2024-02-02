import React, { Fragment, useContext, useEffect, useState } from 'react'
import ChangePrice from '../../Componente/ChangePrice/ChangePrice'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChangeBasePrice from '../ChangeBasePrice/ChangeBasePrice';
import AddNewPrice from '../../Componente/AddNewPrice/AddNewPrice';
import AddNewDescriptionModal from '../../Componente/AddNewDescriptionModal/AddNewDescriptionModal';
import DeletePrice from '../../Componente/DeletePrice/DeletePrice';
import { cotizador } from '../../Context/ApiContext';
import ChangePriceListContainer from '../../Componente/ChangePriceListContainer/ChangePriceListContainer';


const ChangePriceContainer = () => {

    const { precioDataLocal, setPrecioDataLocal } = useContext(cotizador)
    const [showNewDescriptionModal, setShowNewDescriptionModal] = useState(false)


    useEffect(() => {
        setPrecioDataLocal(JSON.parse(localStorage.getItem('HOLA')))
    }, [])


    return (
        <div>
            <h1>CAMBIAR PRECIOS!!</h1>
            <ChangeBasePrice />

            <ChangePriceListContainer />

            <Button variant="primary">
                <Link to='/' style={{ color: '#ffff', textDecoration: 'none' }}>Volver al cotizador</Link>
            </Button >

            <Button variant='primary' onClick={() => { setShowNewDescriptionModal(true) }}>Agregar nueva caracteristica</Button>

            <AddNewDescriptionModal showNewDescriptionModal={showNewDescriptionModal} setShowNewDescriptionModal={setShowNewDescriptionModal} />
        </div >
    )
}

export default ChangePriceContainer