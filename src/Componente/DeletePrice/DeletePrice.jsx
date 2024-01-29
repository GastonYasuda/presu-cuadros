import React, { useState } from 'react'
import DeleteDescriptionModal from '../DeleteDescriptionModal/DeleteDescriptionModal'
import { Button } from 'react-bootstrap'

const DeletePrice = ({ titulo }) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    return (
        <div>
            <Button onClick={() => { setShowDeleteModal(true) }}>Borrar caracteristica</Button>
            <DeleteDescriptionModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} titulo={titulo} />
        </div>
    )
}

export default DeletePrice
