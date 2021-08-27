import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import webbuilders2 from './component/video/webbuilders2.mp4'

export const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav-black bg-black sticky-top">
            <div className="row">
                <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-blue bg-black">
  <div className="container-fluid">
  <video id="shanu" src={webbuilders2}  type= "video/mp4"autoPlay loop muted >
          
          </video>
<a class="navbar-brand" to="/">WEB-BUILDER'S</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact className="nav-link" to="/about">About</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink  exact className="nav-link" to="/contact">Contact Us</NavLink>
        </li> 
      </ul>
    
    </div>
  </div>
</nav>
</div>
</div>
</div>


        </>
    )
}
