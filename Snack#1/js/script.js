// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bicicletta = [
    {
        nome: "Corsa",
        peso: 200
    },
    {
        nome: "MountainBike",
        peso: 250
    },
    {
        nome: "Freestyle",
        peso: 300
    },
    {
        nome: "BeachBike",
        peso: 600
    },
]

console.log("Array di oggetti bicicletta: ", bicicletta);


var biciLeggera = bicicletta[0];

for (var i = 0; i < bicicletta.length; i++) {
    if (bicicletta[i].peso < biciLeggera.peso) {
        biciLeggera = bicicletta[i];
    }
}

console.log("la bici più leggera è: ", biciLeggera);