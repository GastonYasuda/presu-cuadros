import React, { useContext, useEffect, useState } from 'react'
import ChangePrice from '../../Componente/ChangePrice/ChangePrice'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ChangeBasePrice from '../ChangeBasePrice/ChangeBasePrice';
import AddNewPrice from '../../Componente/AddNewPrice/AddNewPrice';
import AddNewDescriptionModal from '../../Componente/AddNewDescriptionModal/AddNewDescriptionModal';
import DeletePrice from '../../Componente/DeletePrice/DeletePrice';
import { cotizador } from '../../Context/ApiContext';


const ChangePriceContainer = () => {

    const { precioData } = useContext(cotizador)
    const [showNewDescriptionModal, setShowNewDescriptionModal] = useState(false)

    return (
        <div>
            <h1>CAMBIAR PRECIOS!!</h1>
            <ChangeBasePrice precioData={precioData} />
            {
                precioData.precios !== undefined &&
                precioData.precios.map((cadaLlave, i) => {
                    return (
                        <div key={i} >
                            <h1>{(Object.keys(cadaLlave))}</h1>
                            <AddNewPrice titulo={Object.keys(cadaLlave)} />
                            <DeletePrice titulo={Object.keys(cadaLlave)} />
                            <ChangePrice cadaLlave={cadaLlave} />
                        </div>
                    )
                })
            }
            <Button variant="primary">
                <Link to='/' style={{ color: '#ffff', textDecoration: 'none' }}>Volver al cotizador</Link>
            </Button >

            <Button variant='primary' onClick={() => { setShowNewDescriptionModal(true) }}>Agregar nueva descripción</Button>

            <AddNewDescriptionModal showNewDescriptionModal={showNewDescriptionModal} setShowNewDescriptionModal={setShowNewDescriptionModal} />
        </div >
    )
}

export default ChangePriceContainer