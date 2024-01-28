import React from 'react'
import { Form } from 'react-bootstrap';

const List = ({ characteristic, descriptionValue, setSelectedDescription, setSelectedCharacteristic }) => {



    const handleSelectChange = (event) => {

        setSelectedDescription(event.target.value)
        setSelectedCharacteristic(characteristic)
    };

    return (
        <Form.Select
            aria-label="Default select example"
            onChange={handleSelectChange}>

            <option>{characteristic}</option>

            {
                descriptionValue.map((value, i) => {
                    return (
                        <option value={i} key={i}>{Object.keys(value)}</option>
                    )
                })
            }

        </Form.Select>
    )
}

export default List