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
    nombre: "Nombre de la actividad",
    fecha: "24 de Mayo de 2016",
    hora: "12:00 a 14:00"
},
{
    nombre: "Nombre de la actividad",
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
            map: mapCentros
        });
    }, this);
}

function cargarActividades() {
    actividadesDeportivas.forEach(function(actividad) {
        var marca = new google.maps.Marker({
            position: {lat: 40.420848, lng: -3.695427},
            label: "A",
            map: mapActividades
        });
    }, this);
}


google.maps.event.addDomListener(window, 'load', cargarCentros);
google.maps.event.addDomListener(window, 'load', cargarActividades);