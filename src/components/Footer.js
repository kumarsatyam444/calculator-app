import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white py-3">
      <Container className="text-center">
        <Row>
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} <span className="fw-bold">Quantum</span><span className="fw-light">Calc</span>
            </p>
            <p className="mb-0 mt-1">
              <small>Crafted with <i className="fas fa-heart text-danger"></i> using React & Bootstrap</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
