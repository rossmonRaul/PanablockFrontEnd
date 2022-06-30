import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './views/home/layout'
import Home from './views/home/'
import Planta from './views/planta'
import TipoMaterial from './views/tipomateriales'
import ActividadPlanta from './views/actividadesplanta'
import Usuarios from './views/usuarios';
import ControlDeCalidad from './views/controldecalidad';

import './custom.css'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} /> 
              <Route path="planta" element={<Planta />} /> 
                <Route path="tipomaterial" element={<TipoMaterial />} />
                <Route path="actividadplanta" element={<ActividadPlanta />} />
                      <Route path="usuarios" element={<Usuarios />} />
                      <Route path="controldecalidad" element={<ControlDeCalidad />} />
              <Route path="*" element={<Navigate to="/" replace />} />           
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

