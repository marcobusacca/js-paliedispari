"use strict";


function stringReverse(string){

    // SPLITTAGGIO E TRASFORMAZIONE STRINGA IN UN ARRAY
    let stringArray = string.split("");
    console.log(stringArray);

    // REVERSIAMO IL CONTENUTO DELL'ARRAY
    stringArray.reverse();
    console.log(stringArray);

    // UINIAMO IL CONTENUTO DELL'ARRAY SOTTOFORMA DI STRINGA
    let stringReverse = stringArray.join("");

    // STAMPO IN CONSOLE LA STRINGA DOPO AVERLA MODIFICATA
    console.log(stringReverse);

    return stringReverse;
}