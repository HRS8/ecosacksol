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
        <div className='w-screen h-screen bg-backg backdrop-blur-md'>
          <div className='flex justify-center w-full'>
            <ComplexNavbar className="z-10"/>
          </div>
        </div>
    </ThemeProvider>
  </React.StrictMode>,
)
