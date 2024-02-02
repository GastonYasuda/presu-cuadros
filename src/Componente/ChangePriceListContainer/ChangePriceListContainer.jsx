import React, { Fragment, useContext } from 'react'
import AddNewPrice from '../AddNewPrice/AddNewPrice';
import DeletePrice from '../DeletePrice/DeletePrice';
import ChangePrice from '../ChangePrice/ChangePrice';
import { cotizador } from '../../Context/ApiContext';

const ChangePriceListContainer = () => {


    const { dataPriceLocal } = useContext(cotizador)

    return (
        <Fragment>
            {
                dataPriceLocal.precios !== undefined &&
                dataPriceLocal.precios.map((eachKey, i) => {
                    return (
                        <Fragment key={i} >
                            <h1>{(Object.keys(eachKey))}</h1>
                            <AddNewPrice myTitle={Object.keys(eachKey)} />
                            <DeletePrice myTitle={Object.keys(eachKey)} />
                            <ChangePrice eachKey={eachKey} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default ChangePriceListContainer
