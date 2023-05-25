"use strict";

// FUNZIONE CHE GENERA UN NUMERO RANDOM
function randomNumber(min, max){

    // GENERAZIONE NUMERO RANDOM ED INSERIMENTO DEL RISULTATO DENTRO UNA CONSTANTE
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    // STAMPO NELLA CONSOLE IL RISULTATO DELLA GENERAZIONE
    console.log(randomNumber);

    return randomNumber;
}

