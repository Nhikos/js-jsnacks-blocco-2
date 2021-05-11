// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayBetween = numbersBetween(array, 3, 6)

function numbersBetween(array, a, b) {
    var newArray = [];
    if (a < b) {
        newArray = array.slice(a, b + 1);
    }
    return newArray;
}
console.log(array);
console.log("Array created from A(3) to B(6): ", arrayBetween);