import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './componentes/Cart/index';
import {BrowserRouter, Routes,Route} from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
         
        <Routes>
        <Route path='/ecommerce' element={ <ItemListContainer/> }/>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> }/>
          <Route path='/cart' element={  <Cart/> }/>
          <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/> }/>
        </Routes>
      </div>
    </BrowserRouter>  
    </>
  );
}

export default App;
