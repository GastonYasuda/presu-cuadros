import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddNewPriceModal from '../AddNewPriceModal/AddNewPriceModal'

const AddNewPrice = ({titulo}) => {

    const [show, setShow] = useState(false)


    const addNewPriceTitle = () => {

        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }

    }

    return (
        <div>
            <Button onClick={addNewPriceTitle}>+</Button>
            <AddNewPriceModal show={show} setShow={setShow} titulo={titulo}/>
        </div>
    )
}

export default AddNewPrice
