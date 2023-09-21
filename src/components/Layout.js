import React from 'react'
//Este archivo reune todos los componentes y permite ver el menu de navegacion en todos los archivos
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>
            <p>Copyright 2021 Web Warrior</p>
        </footer>
    </div>
  )
}
