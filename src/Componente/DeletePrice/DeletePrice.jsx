import React, { useState } from 'react'
import DeleteDescriptionModal from '../DeleteDescriptionModal/DeleteDescriptionModal'
import { Button } from 'react-bootstrap'

const DeletePrice = ({ myTitle }) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    return (
        <div>
            <Button variant="danger" onClick={() => { setShowDeleteModal(true) }}>Borrar caracteristica</Button>
            <DeleteDescriptionModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} myTitle={myTitle} />
        </div>
    )
}

export default DeletePrice
