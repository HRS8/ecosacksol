import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ComplexNavbar } from './navbar.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import Globe from 'react-globe.gl';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <div className='block w-screen h-screen bg-backg -z-50'>
          <div className='flex justify-center w-full'>
            <ComplexNavbar className="z-10"/>
          </div>
          <div>
            <img src="https://drive.google.com/file/d/1inAr_AGw2qWToJWNXPzTEVtxXTByPT1H/view?usp=sharing" alt="plastic earth"/>
          </div>
        </div>
    </ThemeProvider>
  </React.StrictMode>,
)
