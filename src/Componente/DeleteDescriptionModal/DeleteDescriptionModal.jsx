import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { cotizador } from '../../Context/ApiContext';


const DeleteDescriptionModal = ({ showDeleteModal, setShowDeleteModal, titulo }) => {

    const { deleteDescriptionFn } = useContext(cotizador)

    const deleteTitle = () => {
        deleteDescriptionFn(titulo)
        setShowDeleteModal(false)
    }


    return (
        <Modal show={showDeleteModal}  >

            <Modal.Header>
                <Modal.Title>CUIDADO!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Esta seguro de eliminar la descripcion {titulo}?
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { setShowDeleteModal(false) }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={deleteTitle}>
                    Borrar
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default DeleteDescriptionModal
