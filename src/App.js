import './App.css';
import ApiContext from './Componente/Context/ApiContext';
import Presupuestador from './Componente/Presupuestador/Presupuestador';
import { BrowserRouter, Routes, Rote, Route } from 'react-router-dom';

function App() {
  return (

    <ApiContext>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Presupuestador />} />


        </Routes>
      </BrowserRouter>
    </ApiContext>
  );
}

export default App;
