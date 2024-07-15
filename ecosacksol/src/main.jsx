import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ComplexNavbar } from './navbar.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import Globe from 'react-globe.gl';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <div className='block w-screen h-screen bg-[#023020] -z-50'>
          <div className='flex justify-center w-full'>
            <ComplexNavbar className="z-10"/>
          </div>
          <div className="z-1">
            <img src="/compres2rings.png" alt="plastic earth" className='spinn'/>
          </div>
        </div>
    </ThemeProvider>
  </React.StrictMode>,
)
