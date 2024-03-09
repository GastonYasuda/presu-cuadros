import React, { useContext, useEffect, useState } from 'react'
import ListSelect from '../../Componente/ListSelect/ListSelect'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { cotizador } from '../../Context/ApiContext';
import './listSelectContainer.css'
import Header from '../../Componente/Header/Header';
import Footer from '../../Componente/Footer/Footer';


const ListSelectContainer = () => {

    const { dataPriceLocal, addArray, addAll, sweety, quoterResult,firstUpper } = useContext(cotizador)

    const [sumarTodosLosPrecios, setSumarTodosLosPrecios] = useState([])

    useEffect(() => {

        if (sumarTodosLosPrecios.length !== 0) {
            addAll(sumarTodosLosPrecios, dataPriceLocal.base)
        }


    }, [sumarTodosLosPrecios, addArray, quoterResult])

    const calculateBudget = () => {

        let myNewPriceArray = []
        for (const key in addArray) {
            let name = Object.keys(addArray[key].descriptionValue)[0]
            let price = addArray[key].descriptionValue[name]

            myNewPriceArray = [...myNewPriceArray, price]
        }

        if ((dataPriceLocal.precios).length === addArray.length) {
            setSumarTodosLosPrecios(myNewPriceArray)
        } else {
            sweety("ERROR", "Debes seleccionar todos los campos", "error")
        }
    }

    return (
        <section className='mainContainer'>

            <Header />

            <section className='titleListContainer'>


                <div className="titleTxt">
                    <span className='titleTxt__txt'>¡Cotizá Rápido y Fácil!</span>
                    <img src="./Assets/presupuesto.png" alt="presupuesto img" className='titleTxt__img' />
                </div>

                <div className='optionList'>

                {dataPriceLocal.titulo!==undefined&& <span className='optionList__title'>Cotizar {firstUpper(dataPriceLocal.titulo)}</span>}
                   
                    <span className='optionList__subtitle'>Seleccioná tus opciones.</span>

                    <div className='optionList__list'>
                        <span>Precio Base: ${dataPriceLocal.base} -</span>

                        {
                            dataPriceLocal.precios !== undefined &&
                            dataPriceLocal.precios.map((description, i) => {
                                return (
                                    <ListSelect key={i} description={description} />
                                )
                            })
                        }

                        {
                            quoterResult != 0 &&
                            <span className='optionList__result'>
                                Cotización Final:
                                <span className='optionList__result-number'> ${quoterResult}-</span>
                            </span>
                        }

                    </div>

                    <Button onClick={calculateBudget} className='optionList__button'>CALCULAR PRESU</Button>

                </div>
            </section>

            <section className='AMBChangePrice'>
                <div className="ABMChangePrice__img-title">
                    <img src="./Assets/infoIcon.svg" alt="info icon" className='AMBChangePrice__img' />
                    <span className='AMBChangePrice__title'>¿Cómo utilizar?</span>
                </div>

                <span className='AMBChangePrice__txt'>
                    Puedes cambiar los items, opciones y precios ingresando
                    <Link to='/update-price'> aquí</Link>
                    , y se verán reflejados automaticamente en la página del cotizador.
                </span>
            </section>

            <Footer />

        </section >
    )
}

export default ListSelectContainer
