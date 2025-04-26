import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [calculated, setCalculated] = useState(false);
  const [memory, setMemory] = useState(null);

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
      const processedDisplay = display.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100*');
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

  const handlePercentage = () => {
    try {
      const value = parseFloat(display) / 100;
      setDisplay(value.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleToggleSign = () => {
    if (display !== '0') {
      if (display.startsWith('-')) {
        setDisplay(display.substring(1));
      } else {
        setDisplay('-' + display);
      }
    }
  };

  const handleMemoryStore = () => {
    try {
      const currentValue = parseFloat(display);
      setMemory(currentValue);
    } catch (error) {
      // Handle error
    }
  };

  const handleMemoryRecall = () => {
    if (memory !== null) {
      setDisplay(memory.toString());
    }
  };

  return (
    <div className="calculator-card">
      <div className="solar-panel"></div>
      <h4 className="calculator-title">Quantum Calc</h4>
      <div className="main-display">
        {memory !== null && <div className="memory-indicator">M</div>}
        {display}
      </div>
      <div className="equation-display">{equation}</div>
      
      <Row className="g-2">
        <Col xs={3}>
          <Button variant="danger" className="btn-calc btn-clear" onClick={handleClear}>
            AC
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={handleToggleSign}>
            <i className="fas fa-plus-minus"></i>
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={handlePercentage}>
            %
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={() => handleOperatorClick('÷')}>
            ÷
          </Button>
        </Col>
      </Row>
      
      <Row className="g-2">
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('7')}>
            7
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('8')}>
            8
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('9')}>
            9
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={() => handleOperatorClick('×')}>
            ×
          </Button>
        </Col>
      </Row>
      
      <Row className="g-2">
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('4')}>
            4
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('5')}>
            5
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('6')}>
            6
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={() => handleOperatorClick('-')}>
            -
          </Button>
        </Col>
      </Row>
      
      <Row className="g-2">
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('1')}>
            1
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('2')}>
            2
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('3')}>
            3
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={() => handleOperatorClick('+')}>
            +
          </Button>
        </Col>
      </Row>
      
      <Row className="g-2">
        <Col xs={6}>
          <Button variant="light" className="btn-calc btn-number" onClick={() => handleNumberClick('0')}>
            0
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="light" className="btn-calc btn-number" onClick={handleDecimal}>
            .
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="primary" className="btn-calc btn-equal" onClick={handleCalculate}>
            =
          </Button>
        </Col>
      </Row>
      
      <Row className="g-2 mt-2">
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={handleMemoryStore}>
            MS
          </Button>
        </Col>
        <Col xs={3}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={handleMemoryRecall}>
            MR
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="secondary" className="btn-calc btn-operator" onClick={handleDelete}>
            DEL
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Calculator;
