import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
     //Link de redireccion es como un menu
    <nav>
        <h1>Web Warior</h1>
        <div className="links">
           
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio Projects</Link>
            <Link to="/Turismo">Turismo</Link>
        </div>
    </nav>
  )
}
