import './App.css';
import React from 'react';
import Header from './assets/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Register from './assets/components/Register';
import Logs from './assets/components/Logs';
import Payment from './assets/components/Payment';
import Members from './assets/components/Members';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/logs' element={<Logs />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/members' element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
