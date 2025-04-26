import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="floating-shapes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <Header />
      
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <Calculator />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
