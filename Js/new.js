function guardarCampos() {
    var dataRestaurantes;
    dataRestaurantes = window.localStorage.getItem('restaurants');
    dataRestaurantes = JSON.parse(dataRestaurantes);

    var nombre = document.getElementById('txtNombre').value;
    var descripcion = document.getElementById('txtDescripcion').value;
    var direccion = document.getElementById('txtDireccion').value;
    var rutaImg = document.getElementById('txtRutaImagen').value;

    dataRestaurantes.push({
        Nombre_Restaurante: nombre,
        Desc_Restaurante: descripcion,
        Direccion: direccion,
        Ruta_Imagen: rutaImg
    });

    window.localStorage.removeItem('restaurants');
    window.localStorage.setItem('restaurants', JSON.stringify(dataRestaurantes));
    alert('Registro guardado correctamente');
    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtDescripcion').value = "";
    document.getElementById('txtDireccion').value = "";
    document.getElementById('txtRutaImagen').value = "";
}