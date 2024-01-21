import React, { Fragment, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';

const List = ({ characteristic, descriptionValue, setSelectedDescription, setSelectedCharacteristic }) => {


    // useEffect(() => {
    //     console.log(characteristic);
    //     console.log(description);
    //     console.log(descriptionValue);
    // }, [])



    const handleSelectChange = (event) => {

        setSelectedDescription(event.target.value)
        setSelectedCharacteristic(characteristic)
    };



    return (
        <div>

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


            {/* <Form.Select
                aria-label="Default select example"
                value={selectedValue}
                onChange={handleSelectChange}>

                <option>{tituloCat}</option>

                {
                    valorCat !== undefined &&
                    valorCat.map((valor, i) => {
                        return (
                            <Fragment key={i}>
                                <option value={i} key={i}>{Object.keys(valor)}</option>
                            </Fragment>
                        )
                    })
                }
            </Form.Select> */}
        </div>

    )
}

export default List