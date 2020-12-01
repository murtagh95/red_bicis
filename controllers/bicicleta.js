const Bicicleta = require('../models/bicicletas');

exports.bicicleta_list = function (req, res) {
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
};


exports.bicicleta_create_get = function (req, res) {
    res.render('bicicletas/create')
};

exports.bicicleta_create_post = function (req, res) {
    // Creamos un nuevo objeto y lo agregamos a la lista
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.log];
    Bicicleta.add(bici);

    // Al finalizar mandamos la respuesta redirijiendo 
    res.redirect('/bicicletas')
};

exports.bicicleta_update_get = function (req, res) {
    const bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/update', {bici})
};

exports.bicicleta_update_post = function (req, res) {
    let bici = Bicicleta.findById(req.params.id);

    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.log];

    // Al finalizar mandamos la respuesta redirijiendo 
    res.redirect('/bicicletas')
};

exports.bicicleta_delete_post = function (req, res) {
    Bicicleta.removeById(req.body.id);
    
    res.redirect('/bicicletas')
}



