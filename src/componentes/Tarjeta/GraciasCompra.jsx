import React from 'react'
import '../Tarjeta/gracias.css';
import  "react-router-dom";
import 'animate.css';
import Lottie from "lottie-react";

import tarjeta from './tarjeta.json';


const GraciasCompra = () => {
  
  return (
  <>
    <div >
        <div className='container_gracias  '>
            <h4 className='Container_tarjetaa'>Muchas Gracias por su Compra</h4>
            <Lottie animationData={tarjeta}  className='animacion'
            loop
            autoplay
            speed={10}
            />
        </div>
    </div>
       

    
   </>
  )
}

export default GraciasCompra