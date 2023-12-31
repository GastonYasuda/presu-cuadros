import './App.css';
import ApiContext from './Componente/Context/ApiContext';
import { BrowserRouter, Routes, Rote, Route } from 'react-router-dom';
import ListSelectContainer from './Container/ListSelectContainer/ListSelectContainer';

function App() {
  return (

    <ApiContext>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ListSelectContainer />} />


        </Routes>
      </BrowserRouter>
    </ApiContext>
  );
}

export default App;
