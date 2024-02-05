import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChangeBasePrice from '../ChangeBasePrice/ChangeBasePrice';
import AddNewDescriptionModal from '../../Componente/AddNewDescriptionModal/AddNewDescriptionModal';
import { cotizador } from '../../Context/ApiContext';
import ChangePriceListContainer from '../../Componente/ChangePriceListContainer/ChangePriceListContainer';
import Header from '../../Componente/Header/Header';
import './changePriceContainer.css'


const ChangePriceContainer = () => {

    const { setDataPriceLocal } = useContext(cotizador)
    const [showNewDescriptionModal, setShowNewDescriptionModal] = useState(false)


    useEffect(() => {
        setDataPriceLocal(JSON.parse(localStorage.getItem('dataPriceLocalStorage')))
    }, [])


    return (
        <div className='changePriceContainer__main'>
            <Header />
            <h3 className='changeTitle'>ABM precios</h3>

            <ChangeBasePrice />

            <div className='changePriceContainer__body'>

                <div className='changePriceContainer__body-allLists'>


                    <ChangePriceListContainer />
                </div>

                <div className='addReturn'>
                    <Button variant="primary">
                        <Link to='/'  >
                            <img src="./Assets/undo.png" alt="back icon" className='addReturn_button' title='Volver al cotizador.' />
                        </Link>
                    </Button >

                    <Button variant='primary' onClick={() => { setShowNewDescriptionModal(true) }}  >
                        <img src="./Assets/addData.png" alt="add data icon" className='addReturn_button' title='Agregar nueva característica.' />
                    </Button>
                </div>

                <AddNewDescriptionModal showNewDescriptionModal={showNewDescriptionModal} setShowNewDescriptionModal={setShowNewDescriptionModal} />
            </div >

        </div>
    )
}

export default ChangePriceContainer