$(document).ready(function () { 
    getRestaurantes();
})


function getRestaurantes() {
    var dataRestaurantes;
    var dataMostrar = ' ';
    dataRestaurantes = window.localStorage.getItem('restaurants');
    dataRestaurantes = JSON.parse(dataRestaurantes);
    if (dataRestaurantes != null) {
        dataRestaurantes.forEach(element => {
            if (element != undefined) {
                dataMostrar += '<div class="col-3">' +
                    '<div class="articulo">' +
                    '<img src="' + element.Ruta_Imagen + '" alt="avatar">' +
                    '<div class="articulo-container">' +
                    '<h4 class="card-title">' + element.Nombre_Restaurante + '</h4>' +
                    '<h5 class="card-text">' + element.Desc_Restaurante + '</h5>' +
                    '<p class="card-text">' + element.Direccion + '' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
        });
    } else {
        alert('No hay restaurantes creados');
    }
    var dataImprimir = dataMostrar;
    document.getElementById('contenedorFilas').innerHTML = dataImprimir;
}