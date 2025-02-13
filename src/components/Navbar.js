import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ logo, about, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-${mode} bg-${mode} navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{logo}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link" to="/about">{about}</Link>
            </li> 
          </ul> 

          <div className={`form-check form-switch text-${mode==='light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode=== 'light'? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string, 
  RedMode: PropTypes.string, 
};