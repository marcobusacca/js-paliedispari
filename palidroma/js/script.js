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
    console.log(`Parola inserita dall'utente reversata ----> ${stringReverse}`);

    return stringReverse;
}

// RICHIESTA PAROLA ALL'UTENTE TRAMITE PROMPT
const userString = prompt('Inserisci una parola e controllerò per te se è PALINDROMA!').trim().toLowerCase();
console.log(`L'utente ha inserito la parola ----> ${userString}`);


// RICHIAMO FUNZIONE STRING_REVERSE
const userStringReverse = stringReverse(userString);