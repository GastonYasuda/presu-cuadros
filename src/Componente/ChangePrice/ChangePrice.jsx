import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const ChangePrice = ({ cadaLlave }) => {

    const [cadaKey, setCadaKey] = useState([])
    const [selectedValue, setSelectedValue] = useState('');


    useEffect(() => {
        if (cadaLlave !== undefined) {

            // console.log(cadaLlave);

            for (const key in cadaLlave) {
                //  console.log(cadaLlave[key]);
                const llave = cadaLlave[key]
                setCadaKey(cadaLlave[key])

                for (const key2 in llave) {
                    //   console.log(llave[key2]);
                    //   console.log(Object.keys(llave[key2]));
                    //    console.log(llave[key2][Object.keys(llave[key2])])
                }
            }
        }
    }, [cadaLlave])


    return (
        <div>
            {
                cadaLlave !== undefined &&
                cadaKey.map((llave, i) => {
                    return (

                        <div key={i}>
                            <InputGroup className="mb-3" >

                                <InputGroup.Text>{Object.keys(llave)}</InputGroup.Text>
                                <InputGroup.Text>$</InputGroup.Text>


                                <FloatingLabel
                                    controlId="floatingInput"
                                    label={llave[Object.keys(llave)]}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </InputGroup>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChangePrice