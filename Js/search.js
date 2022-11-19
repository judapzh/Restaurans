$(document).ready(function () { 

});

function filtrarDatos(){
    var dataRestaurantes = window.localStorage.getItem('restaurants');
    dataRestaurantes = JSON.parse(dataRestaurantes);
    var txtFiltro = document.getElementById('txtBusqueda').value;
    var dataFiltrada = dataRestaurantes.filter(restautante => restautante.Nombre_Restaurante.toUpperCase().match(txtFiltro.toUpperCase()));
    console.log(dataFiltrada);
    if(dataFiltrada != null){
        var html = " ";
        dataFiltrada.forEach(element => {
            if(element != undefined){
                html += '<div class="col-3">' +
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
            document.getElementById('contenedorFilas').innerHTML = html;
        });
    }
}