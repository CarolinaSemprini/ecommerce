import React,{useEffect, useState} from "react";
import ItemDetail from "../itemDetail";
import {useParams} from "react-router-dom";
import '../itemDetailContainer/itemDetailContainer.css';

const producto=[
    {id:1, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156370-1400-1600/Dominio-Malbec.jpg?v=637952337475000000', category:'vinos', title:'blanco'},
    {id:2, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156308-1400-1600/Encuentro-Malbec.jpg?v=637765076769800000', category:'vinos', title:'aruma'},
    {id:3, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156346-1400-1600/Cajon-Apartado-Gran-Malbec-Single-Vineyard-Gualtallary-Malbec-Dominio-Gran-Malbec-x3_75-.jpg?v=637850390864600000', category:'vinos', title:'Malbec Box I'},
    {id:4, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156348-1400-1600/Estuche-Trumpeter-Malbec-x2.jpg?v=637867747910970000', category:'linea', title:'Estuche x 2 Trumpeter Malbec'},
    {id:5, imagen:'https://rutini.vteximg.com.br/arquivos/ids/155939-1400-1600/Cajon-Apartado-Gran-Blend_1400x1600.jpg?v=637232476758470000', category:'linea', title:'Estuche Apartado Gran Blend'},
    {id:6, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156129-1400-1600/Cajon-Madera-Single-Vineyard-Gualtallary-Malbec-Cabernet-Sauvignon-Cabernet-Franc-x3.jpg?v=637516723710730000', category:'linea', title:'Single Vineyard Gualtallary Mix'},
    {id:7, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156122-1400-1600/Cajon-Antologia-XXXVIII--38---XLVI--46----L--50--x3.jpg?v=637516710143600000', category:'linea', title:'Antología Mix - 3 x 750 ml'},
    {id:8, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156338-1400-1600/Rutini-Riesling.jpg?v=637836665230830000', category:'linea', title:'Rutini Colección Riesling'},
    {id:9, imagen:'https://rutini.vteximg.com.br/arquivos/ids/155850-1400-1600/Antologia-Julio-Le-Parc_1400x1600.jpg?v=637231602363400000', category:'linea', title:'Antología Julio Le Parc'},
    {id:10, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156288-1400-1600/Rutini-Sauvignon-Blanc-375ml.jpg?v=637764952137070000', category:'vinos', title:'Sauvignon Blanc 375 ml'},
    {id:11, imagen:'https://rutini.vteximg.com.br/arquivos/ids/156443-1400-1600/Encuentro-Brut-Nature-Pinot-Noir.jpg?v=638067315796600000', category:'vinos', title:'Encuentro Brut Nature Pinot Noir'},

];

export const ItemDetailContainer =()=>{

    const[data, setData]=useState({});
    const{detalleId}=useParams();

    useEffect(()=>{
        {/*Simulando que demora unos 3 segundos */}
        const getData=new Promise(resolve=>{

                resolve(producto)
            
        });

        {/*Cundo se resuelve la promesa, setea la respuesta y la ingresa en la data */}
        getData.then(res=>setData(res.find(productos=>productos.id===parseInt(detalleId))))  ;
    },[])
    
    return(
        <div className="detalles_producto">
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;