// import { StrictMode } from 'react'
/*
*
Hecho con componentes
*/
import { createRoot } from 'react-dom/client'
import React from 'react';
import { App } from './App';
import './index.css'



const root = createRoot(document.getElementById('root'));
root.render(
  <App />
)
