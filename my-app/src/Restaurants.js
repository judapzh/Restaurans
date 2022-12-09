import React from 'react';
import './App.css';
 
 const Restaurante = () =>{
      return(
    <div className="container-lg">    
        <div className="row contenedorFilas g-4" id="contenedorFilas">
          <div className="col-3">
             <div className="articulo">
               <img  className ="img Restaurante" src= '../img/$props.imagen'alt = 'avatar'/>
               <div className="articulo-container">
                <h5 className="Nombre"><strong>props.Nombre</strong></h5>
               <p className="Descripcion">props.Descripcion.</p>
               <p className="Direccion">props.Descripcio</p>
           </div>
       </div>
       </div>
       </div>
       </div> 
)
}
export default Restaurante;
