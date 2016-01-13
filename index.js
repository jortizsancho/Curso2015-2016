var centrosDeportivos = [{
    nombre: "Centro deportivo de la almudena",
    "type": "Point", 
    "coordinates": [40.433848, -3.695427]
},
{
    nombre: "Centro deportivo de Prueba",
    "type": "Point", 
    "coordinates": [40.433848, -3.675427]
}]; 

var actividadesDeportivas = [{
    nombre: "Partido de Futbol",
    fecha: "24 de Mayo de 2016",
    hora: "12:00 a 14:00"
},
{
    nombre: "Carrera Ponle Freno",
    fecha: "24 de Mayo de 2016",
    hora: "12:00 a 14:00"
}];

var mapCentros, mapActividades;

(function () {
    var app = angular.module('cdm', []);
    
    
    
    app.controller('Actividades', function () {
        this.actividades = actividadesDeportivas;
    });
    
    app.controller('Centros', function () {
       this.centros = centrosDeportivos;
    });
    
})();



function initializeMap() {
    var mapCanvasCentros = document.getElementById('mapCentros');
    var mapCanvasActividades = document.getElementById('mapActividades');
    
    var mapOptions = {
        center: new google.maps.LatLng(40.433848, -3.695427),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    mapCentros = new google.maps.Map(mapCanvasCentros, mapOptions);
    mapActividades = new google.maps.Map(mapCanvasActividades, mapOptions);
}

function cargarCentros() {
    centrosDeportivos.forEach(function(centro) {
        var marca = new google.maps.Marker({
            position: {lat: centro.coordinates[0], lng: centro.coordinates[1]},
            label: "C",
            map: mapCentros,
            centro: centro
        });
        var ventana = new google.maps.InfoWindow({
            content: generarVentana(centro)
        });
        marca.addListener('click', function () {
            ventana.open(mapCentros, marca)
        });
    }, this);
}

function cargarCentro (centro) {
    alert(JSON.stringify(centro));
}

function generarVentana(centro) {
    var contenido = centro.nombre + "<br>";
    contenido += "Latitud: " + centro.coordinates[0] + "<br>";
    contenido += "Longitud: " + centro.coordinates[1] + "<br>";
    contenido += "<a href=\"#\" onclick=\"cambiarDeTab()\">Actividades Deportivas</a>";
    return contenido;     
}

function cambiarDeTab() {
    $("#tab-centros").removeClass("is-active");
    $("#tab-centros-boton").removeClass("is-active");
    $("#tab-actividades").addClass("is-active");
    $("#tab-actividades-boton").addClass("is-active");
}

google.maps.event.addDomListener(window, 'load', cargarCentros);