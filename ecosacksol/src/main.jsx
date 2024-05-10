import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ComplexNavbar } from './navbar.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { SpinningGlobe } from './globe.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <ComplexNavbar />
    </ThemeProvider>
  </React.StrictMode>,
)
