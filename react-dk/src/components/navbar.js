import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    K&Q
                    <i class="fa-thin fa-chess-king"></i>
                    <i class="fa-thin fa-chess-queen"></i>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar