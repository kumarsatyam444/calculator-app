import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [calculated, setCalculated] = useState(false);

  const handleNumberClick = (number) => {
    if (display === '0' || calculated) {
      setDisplay(number);
      setCalculated(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setCalculated(false);
    setDisplay(display + operator);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setCalculated(false);
  };

  const handleCalculate = () => {
    try {
      // Replace × with * and ÷ with / for JavaScript evaluation
      const processedDisplay = display.replace(/×/g, '*').replace(/÷/g, '/');
      const result = eval(processedDisplay);
      setEquation(`${display} = ${result}`);
      setDisplay(result.toString());
      setCalculated(true);
    } catch (error) {
      setDisplay('Error');
      setCalculated(true);
    }
  };

  const handleDecimal = () => {
    if (calculated) {
      setDisplay('0.');
      setCalculated(false);
      return;
    }
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleDelete = () => {
    if (display.length === 1 || calculated) {
      setDisplay('0');
      setCalculated(false);
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <Card className="calculator-card">
      <Card.Body>
        <div className="equation-display">{equation}</div>
        <div className="main-display">{display}</div>
        <Row className="g-2">
          <Col xs={6}>
            <Button variant="danger" className="w-100" onClick={handleClear}>
              AC
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="secondary" className="w-100" onClick={handleDelete}>
              DEL
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="secondary" className="w-100" onClick={() => handleOperatorClick('÷')}>
              ÷
            </Button>
          </Col>
        </Row>
        
        <Row className="g-2 mt-1">
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('7')}>
              7
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('8')}>
              8
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('9')}>
              9
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="secondary" className="w-100" onClick={() => handleOperatorClick('×')}>
              ×
            </Button>
          </Col>
        </Row>
        
        <Row className="g-2 mt-1">
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('4')}>
              4
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('5')}>
              5
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('6')}>
              6
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="secondary" className="w-100" onClick={() => handleOperatorClick('-')}>
              -
            </Button>
          </Col>
        </Row>
        
        <Row className="g-2 mt-1">
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('1')}>
              1
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('2')}>
              2
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('3')}>
              3
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="secondary" className="w-100" onClick={() => handleOperatorClick('+')}>
              +
            </Button>
          </Col>
        </Row>
        
        <Row className="g-2 mt-1">
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={() => handleNumberClick('0')}>
              0
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="light" className="w-100" onClick={handleDecimal}>
              .
            </Button>
          </Col>
          <Col xs={6}>
            <Button variant="primary" className="w-100" onClick={handleCalculate}>
              =
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Calculator;
