import React from 'react';
import {Link} from 'react-router-dom';
  
const Navbar = () => {
return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <div cclassName="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className= "nav-item">
        <Link className="nav-link" to ='/Listar'>LISTADO</Link>
        </li>
     
        <li className= "nav-item">
        <Link className="nav-link" to ='/Search'>buscar</Link>
        </li>
        <li className= "nav-item">
        <Link className="nav-link" to ='/New'>Nuevo</Link>
        </li>
        <li className= "nav-item">
        <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}
export default Navbar;
