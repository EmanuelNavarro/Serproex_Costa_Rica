window.onload = callService;

var datos;
var urlApp = "https://emanuelnavarro.github.io/Serproex_API/servicios.json";

function callService () {
    $.ajax({
        url: urlApp,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess (data) {
    datos = data;
    procesarDatos();
}

function onError (jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL " + urlApp);
}

function procesarDatos() {
    let menuContainer = document.getElementById("services-container");
    let html = "";
    datos.servicios.forEach(servicio => {
        html += "<div class='col-md-4 '>";
        html += "<div class='card'>";
        html += "<div class='narrow'>";
        html += "<i class='fa fa-music fa-4x' data-fa-transform='shrink-3 up-3'></i>";
        html += "<h3 class='text-white'>" + servicio.texto + "</h3>";
        html += "<audio class='audio-control' controls>";
        html += "<source src='" + servicio.audio1 + "' type='audio/mp3'>";
        html += "</audio>";
        html += "<audio class='audio-control' controls>";
        html += "<source src='" + servicio.audio2 + "' type='audio/mp3'>";
        html += "</audio>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        /*<div class='col-md-4 '>
        <div class='card'>
        <div class='narrow'>
        <i class='fa fa-music fa-4x' data-fa-transform='shrink-3 up-3'></i>
        <h3 class='text-white'>Audios para Centrales Telefónicas y Sistemas de Comunicación.</h3>
        <audio class='audio-control' controls>
        <source src='Audios/BQ1 - Audi.mp3' type='audio/mp3'>
        </audio>
        <audio class='audio-control' controls>
        <source src='Audios/BQ1 - ADR CENTER.mp3' type='audio/mp3'>
        </audio>
        </div>
        </div>
        </div>*/

    });
    menuContainer.innerHTML= "";
    menuContainer.innerHTML = html;
}