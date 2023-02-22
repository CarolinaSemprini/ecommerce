import React from "react";
import VIÑEDOS from "../../imagenes/VIÑEDOS.png";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";


 const NavBar =()=>{
   
    return(
        <header>
          <NavLink to='/' >
            <div className="logo">
                <img src={VIÑEDOS} width="150"/>
            
            </div>
          </NavLink> 
          <ul>
            <li>
              <NavLink to='/'>Catalogo</NavLink>
            </li>
            <li>
                <NavLink to='/categoria/linea'>Líneas</NavLink>
            </li>
            <li>
                <NavLink to='/categoria/vinos'>Vinos</NavLink>
            </li>
            <li>
                <NavLink  to='cart'>
                  <CartWidget className="cart"/>
                  </NavLink>
            </li>
          </ul>
          
        </header>
    )
}

export default NavBar;