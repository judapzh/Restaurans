import React from 'react';
import {Link} from 'react-router-dom';
const navbar = () => {
return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div cclassName="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className= "nav-item">
        <Link className="nav-link" to ='/listar'>LISTADO</Link>
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
export default navbar;
