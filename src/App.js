import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes" ;
import './styles/main.css';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Granim from 'granim';

const logo = require('./assets/trh.png')

function App() {
  useEffect(() => {
    new Granim({
      element: ".home-canvas",
      direction: "top-bottom",
      states: {
        "default-state": {
          gradients: [
            ["#010c14", "#3B94C4"],
            [ "#3B94C4", "#092e4a"],
            [ "#092e4a", "#3B94C4"],
            [ "#3B94C4", "#010c14"],
            // ["#A65140", "#C07B32"],
          ],
          transitionSpeed: 10000,
        }
      }
    })
  });
  return (
    <>     
      <Router>
        <div className='home-canvas-wrapper'>
          <canvas className="home-canvas"/> 
          <Link to="/"> <img src={logo} className="logo" alt="TRH-logo" /></Link>
        <AnimatedRoutes/ >
      </div>
    </Router>
    </> 
  );

}

export default App;
