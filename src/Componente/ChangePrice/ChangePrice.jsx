import React, { Fragment, useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import ChangePriceModal from '../ChangePriceModal/ChangePriceModal';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import { cotizador } from '../../Context/ApiContext.jsx';

const ChangePrice = ({ cadaLlave }) => {

    const [cadaKey, setCadaKey] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [myKey, setMyKey] = useState('')

    const [show, setShow] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)


    const { sweety } = useContext(cotizador)


    useEffect(() => {

        //setPrecioDataLocal(JSON.parse(localStorage.getItem('HOLA')))

        if (cadaLlave !== undefined) {
            for (const key in cadaLlave) {
                //  console.log(cadaLlave[key]);
                setCadaKey(cadaLlave[key])
            }
        }

    }, [cadaLlave])

    const getNewPrice = (e) => {
        setSelectedValue(e.target.value)

    }

    const updateIsNum = () => {
        if (isNaN(selectedValue) || selectedValue === '') {
            sweety("ERROR", "Debes ingresar un número", "error")
        } else {
            //tengo que hacer que actualice getItem
            setShow(true)
        }
    }


    return (
        <>
            {
                cadaLlave !== undefined &&
                cadaKey.map((llave, i) => {
                    return (
                        <Fragment key={i}>
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

                                <Button onClick={() => { setShowDeleteModal(true); setMyKey(llave) }}>
                                    Eliminar
                                </Button>

                                <Button variant="outline-secondary" id="button-addon2" onClick={() => { updateIsNum(); setMyKey(llave) }} >
                                    Actualizar
                                </Button>

                            </InputGroup>
                            <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} llave={Object.keys(myKey)} titulo={cadaLlave} />

                            <ChangePriceModal show={show} setShow={setShow} selectedValue={selectedValue} llave={Object.keys(myKey)} titulo={Object.keys(cadaLlave)} />
                        </Fragment>
                    )
                })
            }
        </ >
    )
}

export default ChangePrice