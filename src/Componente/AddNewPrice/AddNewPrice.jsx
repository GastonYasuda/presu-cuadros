import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddNewPriceModal from '../AddNewPriceModal/AddNewPriceModal'

const AddNewPrice = ({ myTitle }) => {

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
            <Button onClick={addNewPriceTitle}>Agregar descripción</Button>
            <AddNewPriceModal show={show} setShow={setShow} myTitle={myTitle} />
        </div>
    )
}

export default AddNewPrice
