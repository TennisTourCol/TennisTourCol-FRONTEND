import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Resultado from './Resultados'

class CuadrosTorneos extends React.Component {
  
  render() {
    return (
      <>
        <div className="content">
        <Carousel>
            <div interval={100}>
                <h3>Octavos de final</h3>
                <Resultado/>
            </div>
            <div interval={500}>
                <img src="./components/img/prueba.jpeg" />
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

        </div>
      </>
    );
  }
}

export default CuadrosTorneos;