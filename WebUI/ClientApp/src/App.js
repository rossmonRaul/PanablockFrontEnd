import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './views/home/layout'
import Home from './views/home/'
import Planta from './views/planta'

import './custom.css'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} /> 
              <Route path="planta" element={<Planta />} /> 
              <Route path="*" element={<Navigate to="/" replace />} />             
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

