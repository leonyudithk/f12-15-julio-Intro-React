import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../components/List';
import NavBar from '../components/NavBar';
import Pantalla1 from '../components/Pantalla1';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
             <Route path="/" element={<List/>}/>
             <Route path="/pantalla" element={<Pantalla1/>}/>
            </Routes>
    </BrowserRouter>
  );
};

export default App;

