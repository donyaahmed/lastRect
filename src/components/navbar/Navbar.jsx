import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#"><img  src={logo} className='w-25'/><span></span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link" to="">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to='register'>Jion Free</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}
