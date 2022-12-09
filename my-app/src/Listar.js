import React from 'react';
import './App.css';
import Restaurante from './Restaurants';


function Listar() {
  return (
     <div>
       <h1>restaurantes</h1>
       <Restaurante
         imagen='ilforno.jpg'
         Nombre='ilforno'
         Descripcion='comida internacional'
         Dirreccion='calle 50 45 20 bello antioquia'
       />
       <Restaurante
         imagen='pampa.jpg'
         Nombre='Pampa Argentina'
         Descripcion='Asado tipo argentino'
         Dirreccion='calle 56 50 40 bello antioquia'
       />
       <Restaurante
         imagen='pigassus.jpg'
         Nombre='Pigassus'
         Descripcion='comida Rapidas '
         Dirreccion='carrera 52 48 23 bello antioquia'
        />
       <Restaurante
         imagen='SUSHI.jpg'
         Nombre='Sushi make'
         Descripcion='comida oriental'
         Dirreccion='calle 58 70 15 bello antioquia'
       />
     </div>
  );
}

export default Listar;
