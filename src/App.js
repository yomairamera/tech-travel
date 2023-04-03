import { useState } from 'react';
import Header from './components/Header';
import Travels from './page/Travels';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Purchase from './page/Purchase';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header counter={counter}/>
      <Routes>
        <Route>
          <Route path="/" element={<Travels setCounter={setCounter}/>} />
          <Route path="/purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
