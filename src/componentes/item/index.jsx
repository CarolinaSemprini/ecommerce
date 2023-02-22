import './item.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item =({info})=>{
    return(
        
        <Link to={`/detalle/${info.id}`} className='productos'>
            <img src={info.imagen} alt='blnaco'/>
            <p>{info.title}</p>
        </Link>
       
       
    )
}

export default Item;
