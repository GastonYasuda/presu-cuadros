// import React, {  useEffect, useState } from 'react'
// import Form from 'react-bootstrap/Form';


// const Listados = ({ losDatos, valor }) => {


//     const [valorSeleccionado, setValorSeleccionado] = useState('');

//     const handleChange = (event) => {
//         setValorSeleccionado(event.target.value);
//     };

//     useEffect(() => {
//         console.log(saludo);
//         if (valorSeleccionado.length !== 0) {
//             console.log(valorSeleccionado)
//         }
//     }, [valorSeleccionado])

//     const generarOpciones = () => {
//         const opciones = [];

//         for (const key in losDatos) {
//             opciones.push(
//                 <option key={key} value={losDatos[key]}>
//                     {key}
//                 </option>
//             );
//         }

//         return opciones;
//     };



//     return (
//         <Form.Select value={valorSeleccionado} onChange={handleChange}>

//             <option>{valor}</option>

//             {generarOpciones()}

//         </Form.Select>
//     )
// }

// export default Listados
