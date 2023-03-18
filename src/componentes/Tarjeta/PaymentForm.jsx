import React, { useState } from 'react';
import 'react-credit-cards-2/es/styles-compiled.css';
import Cards from 'react-credit-cards-2';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import '../Tarjeta/paymentform.css'


const PaymentForm = () => {


    const initialStateValues={
      number: "",
      expiry: "",
      cvc: "",
      name: "",
    }

    const[values, setValues]=useState(initialStateValues);

    //capturar los cambios de los input
    const handleInputChange=e=>{
      const {name,value}=e.target;
      setValues({...values, [name]:value})
    }
    
    

    const handleSubmit=e=>{
    e.preventDefault();
    console.log(values)
   
    }
    
    return (
      <>
      <div className='card' id='PaymentForm'>
        <div className='card-body'>
        <Cards
          number={values.number}
          name={values.name}
          expiry={values.expiry}
          cvc={values.cvc}
          
          
          
        />
        <form >
            <div className='form-group'>
                <label htmlFor='number'>Número de la Tarjeta</label>
                <input
                 type="text"
                 name='number'
                 maxLength="16"
                 id='number'
                 className='form-control'
                 onChange={handleInputChange}
                 
                />

            </div>
            <div className='form-group'>
                <label htmlFor='name'>Nombre</label>
                <input
                 type="text"
                 name='name'
                 id='name'
                 className='form-control'
                 onChange={handleInputChange}
                 
                />

            </div>
            <div className='form-row'>
                <div className='form-group_fecha col-md-6'>
                    <label htmlFor='expiry'>Fecha de Expiración</label>
                    <input
                    type="text"
                    maxLength="5"
                    name='expiry'
                    id='expiry'
                    className='form-control'
                    onChange={handleInputChange}
                    
                   
                    />

                </div>
                <div className='form-group_fecha col-md-6'>
                    <label htmlFor='cvc'>CVC</label>
                    <input
                    type="text"
                    maxLength="4"
                    name='cvc'
                    id='cvc'
                    className='form-control'
                    onChange={handleInputChange}
                   
                    />

                </div>
            </div>
            <Link to='/GraciasCompra' ><button className="btn btn-success btn-block btn-lg pagar" onClick={handleSubmit} 
               >Pagar</button></Link>
           
           
        </form>
        </div>
        
      </div>
     
    </>
    );
  }

  export default PaymentForm;