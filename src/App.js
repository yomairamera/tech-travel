import { useState } from 'react';
import Header from './components/Header';
import Travels from './page/Travels';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Purchase from './page/Purchase';

function App() {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);

  const updateData = (dataNueva) => {
      const dataTmp = { ...data };
      if (dataTmp[dataNueva.id]) {
        dataTmp[dataNueva.id].count += 1;
      } else {
        dataTmp[dataNueva.id] = { count: 1, data: dataNueva };
      }
      setData(dataTmp);
  }

  const deleteData =(id) => {
    setCounter(value => value - data[id].count);
    const newData = { ...data };
    delete newData[id];
    setData(newData);
  }

  return (
    <div>
      <Header counter={counter}/>
      <Routes>
        <Route>
          <Route path="/" element={<Travels updateData={updateData} setCounter={setCounter}/>} />
          <Route path="/purchase" element={<Purchase data={data} deleteData={deleteData} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
