let map = L.map('main_map').setView([-32.9812397,-68.7876248], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor'
}).addTo(map);

// Cargamos puntos de referencia
// L.marker([-32.98184263945343, -68.78846167201478]).addTo(map);
// L.marker([-32.98085265478189, -68.78311871168687]).addTo(map);
// L.marker([-32.98457853936029, -68.78554342862283]).addTo(map);


// LLamamos a nuesta API
$.ajax({
    dataType: "json",
    url: 'api/bicicletas',
    success: function (result) {
        console.log(result);
        // Trabajamos sobre el array que contiene bicicletas
        result.bicicletas.forEach(bici =>{
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
});