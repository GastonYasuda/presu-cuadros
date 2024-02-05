import React, { Fragment, useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import ChangePriceModal from '../ChangePriceModal/ChangePriceModal';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import { cotizador } from '../../Context/ApiContext.jsx';

const ChangePrice = ({ eachKey }) => {

    const [myKeyState, setMyKeyState] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [myKey, setMyKey] = useState('')

    const [show, setShow] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)


    const { sweety } = useContext(cotizador)


    useEffect(() => {

        if (eachKey !== undefined) {
            for (const key in eachKey) {
                //  console.log(eachKey[key]);
                setMyKeyState(eachKey[key])
            }
        }

    }, [eachKey])

    const getNewPrice = (e) => {
        setSelectedValue(e.target.value)
    }

    const updateIsNum = () => {
        if (isNaN(selectedValue) || selectedValue === '') {
            sweety("ERROR", "Debes ingresar un número", "error")
        } else {
            setShow(true)
        }
    }


    return (
        <>
            {
                eachKey !== undefined &&
                myKeyState.map((forEachKey, i) => {
                    return (
                        <Fragment key={i}>
                            <InputGroup className="mb-3" >

                                <InputGroup.Text style={{ width: "9rem" }}>{Object.keys(forEachKey)}</InputGroup.Text>
                                <InputGroup.Text>$</InputGroup.Text>


                                <FloatingLabel
                                    controlId="floatingInput"
                                    label={forEachKey[Object.keys(forEachKey)]}
                                    onChange={(e) => { getNewPrice(e) }}
                                >
                                    <Form.Control type="" placeholder="" />
                                </FloatingLabel>

                                <Button variant="danger" onClick={() => { setShowDeleteModal(true); setMyKey(forEachKey) }}>
                                    <img src="./Assets/deleteIcon.png" alt="delete icon" title='Borrar descripción' />
                                </Button>

                                <Button variant="primary" id="button-addon2" onClick={() => { updateIsNum(); setMyKey(forEachKey) }} >
                                    <img src="./Assets/update.png" alt="update icon" title='Actualizar precio' />
                                </Button>

                            </InputGroup>
                            <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} forEachKey={Object.keys(myKey)} />

                            <ChangePriceModal show={show} setShow={setShow} selectedValue={selectedValue} forEachKey={Object.keys(myKey)} descriptionTitle={Object.keys(eachKey)} />
                        </Fragment>
                    )
                })
            }
        </ >
    )
}

export default ChangePrice