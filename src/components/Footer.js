import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <Container className="text-center">
        <Row>
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} <span className="fw-bold">Calc</span><span className="fw-light">Master</span>
            </p>
            <p className="mb-0 mt-2">
              <small>Beautifully crafted with React and Bootstrap</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
