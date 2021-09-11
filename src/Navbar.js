import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


export const Navbar = () => {
    return (
      <>
      
      <nav className="navbar navbar-expand-lg  bg-black">
  <div className="container-fluid">
    <h9 id="head">WEB BUILDER'S</h9>
    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <span className="navbar-toggler-icon"></span>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav px-4 ms-auto" >
        <li className="nav-item">
          <NavLink exact  className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  className="nav-link" to="/service">Services</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link " to="/contact">Contact us</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}
