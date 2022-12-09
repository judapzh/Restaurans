
import React from 'react';
import  './Restaurants';
import '/App.css';

export const Search = () => {
  return(
    <div className="container-lg">
    <h1>Crear un restautante</h1>
    <div className="row">
        <div className="mb-3">
            <label for="txtBusqueda" className="form-label">Escribe el nombre de un restautante</label>
            <input type="text" className="form-control" id="txtBusqueda" placeholder="Frisby"/>
        </div>
    </div>
    <div class="row">
        <button type="button" className="btn btn-info btn-sm" onclick="filtrarDatos()">Buscar</button>
    </div>
    
    <div className="row" id="contenedorFilas"></div>
</div>
  )
}
export default Search ;
