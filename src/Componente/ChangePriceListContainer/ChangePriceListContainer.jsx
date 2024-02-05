import React, { Fragment, useContext } from 'react'
import AddNewPrice from '../AddNewPrice/AddNewPrice';
import DeletePrice from '../DeletePrice/DeletePrice';
import ChangePrice from '../ChangePrice/ChangePrice';
import { cotizador } from '../../Context/ApiContext';
import Card from 'react-bootstrap/Card';
import './changePriceListContainer.css'


const ChangePriceListContainer = () => {


    const { dataPriceLocal } = useContext(cotizador)

    return (
        <Fragment>
            {
                dataPriceLocal.precios !== undefined &&
                dataPriceLocal.precios.map((eachKey, i) => {
                    return (
                        <Card key={i} className='changePriceCard'>
                            <Card.Body className='changePriceCard__body'>

                                <div className='cardTitleMenu'>
                                    <Card.Title className='cardTitleMenu__title'>{(Object.keys(eachKey))}</Card.Title>

                                    <div className='cardTitleMenu__add-delete'>
                                        <DeletePrice myTitle={Object.keys(eachKey)} />
                                        <AddNewPrice myTitle={Object.keys(eachKey)} />
                                    </div>

                                </div>
                                <ChangePrice eachKey={eachKey} />

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}

export default ChangePriceListContainer
