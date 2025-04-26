import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          <i className="fas fa-calculator me-2"></i>
          Quantum <span className="fw-light">Calc</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
