import React,{useEffect, useState} from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../itemDetail";
import {useParams} from "react-router-dom";
import '../itemDetailContainer/itemDetailContainer.css';



export const ItemDetailContainer =()=>{

    const[data, setData]=useState({});
    const{detalleId}=useParams();

    useEffect(()=>{
        //1-traigo los servicios de getfirestore
       const querydb=getFirestore();
       //2-luego dentro de doc meto la funcion de getfirestore, el nombre de la tabla y el id del doc
       const queryDoc=doc(querydb,'productos',detalleId);
       //3- con getdoc creo una promesa de que me trae ese documento y creo un objeto y traigo el id dentro del objeto 
       getDoc(queryDoc)
       .then(res=>setData({id:res.id, ...res.data()}))
    },[detalleId])
    
    return(
        <div className="detalles_producto">
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;