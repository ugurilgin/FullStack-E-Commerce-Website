import React from 'react'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div>
            <nav>
            <ul className="navbar">
                <Link to="/">
            <li className="navbar-item"><a href="#home">Home</a></li>
            </Link>
            <Link to="/">
            <li className="navbar-item"><a href="#news">News</a></li>
            </Link>
            <Link to="/">
            <li className="navbar-item"><a href="#contact">Contact</a></li>
            </Link>
            </ul>
            </nav>
          
        </div>
    )
}

export default Header