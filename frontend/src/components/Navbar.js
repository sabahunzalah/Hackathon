import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <BootstrapNavbar className="custom-navbar" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/signup">
        <img
          src="/SMIT-logo.png"
          alt="Logo"
          className="navbar-logo"
        />
        MyApp
      </BootstrapNavbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
