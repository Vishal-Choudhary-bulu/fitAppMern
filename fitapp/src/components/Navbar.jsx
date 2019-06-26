import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
    <nav className="navbar">
        <div className="Brand">YOUFIT</div>
        <ul className="navbar-links">
            <li><Link to ='/' className='navbarlink'> Exercises </Link></li>
            <li><Link to ='/users' className='navbarlink'> Users </Link></li>
            <li><Link to ='/workout' className='navbarlink'> New WorkOut </Link></li>
        </ul>
    </nav>)
}

export default Navbar
