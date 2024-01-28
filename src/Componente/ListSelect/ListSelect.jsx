import React, { useContext, useEffect, useState } from 'react'
import List from '../List/List';
import { cotizador } from '../../Context/ApiContext';

const ListSelect = ({ description }) => {

    const { addPriceArrayResult } = useContext(cotizador)

    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCharacteristic, setSelectedCharacteristic] = useState()

    useEffect(() => {

        if (selectedCharacteristic !== undefined && selectedDescription !== undefined) {

            addPriceArrayResult(selectedCharacteristic, selectedDescription);
        }

    }, [selectedCharacteristic, selectedDescription])


    return (
        <div>
            {
                Object.keys(description).map((characteristic, i) => {
                    return (
                        <List key={i}
                            description={description}
                            characteristic={characteristic}
                            descriptionValue={description[characteristic]}
                            setSelectedDescription={setSelectedDescription}
                            setSelectedCharacteristic={setSelectedCharacteristic}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListSelect
