import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListSelectContainer from './Container/ListSelectContainer/ListSelectContainer';
import ChangePriceContainer from './Container/ChangePriceContainer/ChangePriceContainer';
import ApiContext from './Context/ApiContext';

function App() {
  return (

    <ApiContext>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<ListSelectContainer />} />
          <Route path='/:update-price' element={<ChangePriceContainer />} />


        </Routes>
      </BrowserRouter>
    </ApiContext>
  );
}

export default App;
