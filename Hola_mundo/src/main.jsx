import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx' /*importo desde App.jsx*/
import './index.css' /*importamos los estilos generales*/

const root= createRoot(document.getElementById('root'))



root.render(
  <App />
)
 
