import React,{useState} from "react";
import '../itemDetail/itemDetail.css';
import ItemCount from "../itemCount/index";
import { Link } from "react-router-dom";


export const ItemDetail =({data})=>{

   const [goToCard, setgoToCard]=useState(false);

    const onAdd = (cantidad)=>{
       setgoToCard(true);
    }
    return(
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.imagen} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    {/* aqui establezco el valor inicial del contador y el valor del stock el maximo del contador esta informacion se la paso por props a la funcion del componente ItemCount*/}

                    {
                        goToCard
                        ? <Link to="/cart">Terminar Compra</Link>
                        :<ItemCount inicial={0} stock={5} onAdd={onAdd}/>
                    }
                    
                </div>

            </div>

        </div>
    );
}

export default ItemDetail;