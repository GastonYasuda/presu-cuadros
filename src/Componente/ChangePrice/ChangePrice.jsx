import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import ChangePriceModal from '../ChangePriceModal/ChangePriceModal';
import { cotizador } from '../Context/ApiContext';

const ChangePrice = ({ cadaLlave }) => {

    const [cadaKey, setCadaKey] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [myKey, setMyKey] = useState('')

    const [show, setShow] = useState(false);

    const { presuData } = useContext(cotizador)


    useEffect(() => {
        if (cadaLlave !== undefined) {

            //  console.log(Object.keys(cadaLlave)[0]);

            for (const key in cadaLlave) {
                //  console.log(cadaLlave[key]);
                const llave = cadaLlave[key]
                setCadaKey(cadaLlave[key])

                for (const key2 in llave) {
                    //   console.log(llave[key2]);
                    //   console.log(Object.keys(llave[key2]));
                    console.log(llave[key2][Object.keys(llave[key2])])
                }
            }
        }
        // console.log(cadaKey[0]["10x10"]);

    }, [cadaLlave, presuData])

    const getNewPrice = (e) => {
        // console.log(e.target.value);
        setSelectedValue(e.target.value)
    }


    return (
        <div>
            {
                cadaLlave !== undefined &&
                cadaKey.map((llave, i) => {
                    return (

                        <div key={i}>
                            <div>
                                <InputGroup className="mb-3" >

                                    <InputGroup.Text>{Object.keys(llave)}</InputGroup.Text>
                                    <InputGroup.Text>$</InputGroup.Text>


                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label={llave[Object.keys(llave)]}
                                        onChange={(e) => { getNewPrice(e) }}
                                    >
                                        <Form.Control type="" placeholder="" />
                                    </FloatingLabel>

                                    <Button variant="outline-secondary" id="button-addon2" onClick={() => { setShow(true); setMyKey(llave) }} >
                                        Actualizar
                                    </Button>

                                </InputGroup>

                            </div>

                            <ChangePriceModal setShow={setShow} show={show} selectedValue={selectedValue} llave={Object.keys(myKey)} titulo={cadaLlave} />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ChangePrice