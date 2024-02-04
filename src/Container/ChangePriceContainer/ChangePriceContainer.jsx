import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChangeBasePrice from '../ChangeBasePrice/ChangeBasePrice';
import AddNewDescriptionModal from '../../Componente/AddNewDescriptionModal/AddNewDescriptionModal';
import { cotizador } from '../../Context/ApiContext';
import ChangePriceListContainer from '../../Componente/ChangePriceListContainer/ChangePriceListContainer';
import Header from '../../Componente/Header/Header';


const ChangePriceContainer = () => {

    const { setDataPriceLocal } = useContext(cotizador)
    const [showNewDescriptionModal, setShowNewDescriptionModal] = useState(false)


    useEffect(() => {
        setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))
    }, [])


    return (
        <div>
            <Header />
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