import React from 'React';

const Nuevo = () => {
return (
  <div className='container-lg'>
        <div className='row'>
            <div className='mb-3'>
                <label for='txtNombre' className='form-label'>Nombre</label>
                <input type='text' className='form-control' id='txtNombre´' placeholder='Frisby'/>
            </div>
        </div>
        <div className='row'>
            <div className='mb-3'>
                <label for='txtDescripcion' className='form-label'>Descripcion</label>
                <input type='text' className='form-control' id='txtDescripcion'
                    placeholder='Restaurante de pollo frito y otros'/>
            </div>
        </div>
        <div className='row'>
            <div className='mb-3'>
                <label for='txtDireccion' className='form-label'>Direccion</label>
                <input type='text' className='form-control' id='txtDireccion' placeholder='Avenida siempre viva'/>
            </div>
        </div>
        <div className='row'>
            <div className='mb-3'>
                <label for='txtRutaImagen'classclassName='form-label'>Ruta imagen</label>
                <input required type='text' className='form-control' id='txtRutaImagen'
                    placeholder='https://picsum.photos/300/300.jpg'/>
            </div>
        </div>
        <div className='row'> 
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button classclassName="btn btn-info me-md-2" type="button" onclick="guardarCampos()">Guardar</button>
                <button classclassName="btn btn-info" type="button" onclick="limpiarCampos()">Limpiar</button>
            </div>
        </div>
    </div>
    )
}

 export default Nuevo;