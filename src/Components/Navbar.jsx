import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg py-2 ">
        <div className="container">
       <Link to='/#' >INFORMATIVE DATA</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/">HOME</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/detail">DETAILS</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/create">CREATE DATA</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
            
        </>
    );
};

export default Navbar;