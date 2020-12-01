var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;

}

// Redefino el metodo toString del objeto
Bicicleta.prototype.toString = function () {
    return `Id: ${this.id} | Color: ${this.color} `;
}

Bicicleta.allBicis = [];

// MÉTODOS
Bicicleta.add = function (Bici) {
    Bicicleta.allBicis.push(Bici);
}
Bicicleta.findById = function (aBiciId) {
    let aBici = Bicicleta.allBicis.find( x => x.id == aBiciId);
    if (aBici) {
        return aBici;
    }else {
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
    }
};

Bicicleta.removeById = function (aBiciId) {
    // const aBici = Bicicleta.findById(aBiciId);
    for(let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
};


let a = new Bicicleta(1, 'rojo', 'Urbana', [-32.98184263945343, -68.78846167201478]);
let b = new Bicicleta(2, 'blanca', 'Urbana', [-32.98085265478189, -68.78311871168687]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;

