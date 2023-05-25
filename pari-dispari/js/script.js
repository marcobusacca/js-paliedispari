"use strict";

// ALERT DI BENVENUTO
alert(`
Benvenuto! 

In questa applicazione giocherai contro il Computer!

---------------------------------------------------------------------------

Spiegazione gioco:

Dovrai scegliere tra "PARI" e "DISPARI",

Dopo aver scelto, devi inserire un Numero a tua Scelta compreso tra 1 e 5.

Genereremo un Numero Random (sempre compreso tra 1 e 5) per il Computer, che sarà il tuo avversario!

Se la SOMMA di Entrambi i Numeri sarà un Numero che Corrisponde alla tua Scelta (PARI o DISPARI), Avrai Vinto!

Altrimenti avrai Perso!

---------------------------------------------------------------------------

Clicca OK per continuare, Buona Fortuna!
`)


// FUNZIONE CHE GENERA UN NUMERO RANDOM
function randomNumber(min, max){

    // GENERAZIONE NUMERO RANDOM ED INSERIMENTO DEL RISULTATO DENTRO UNA CONSTANTE
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    // STAMPO NELLA CONSOLE IL RISULTATO DELLA GENERAZIONE
    console.log("Numero Random del Computer ---->", randomNumber);

    return randomNumber;
}


// PROMPT SCELTA UTENTE
let userChoice = prompt('Scegli tra "PARI" o "DISPARI"!').trim().toUpperCase();

// CONTROLLO CONTENUTO INSERITO DALL'UTENTE NEL PROMPT
while(userChoice !== "PARI" && userChoice !== "DISPARI"){
    userChoice = prompt('Inserisci bene la tua Scelta! Scegli tra "PARI" o "DISPARI"!').trim().toUpperCase();
    
}

// CONSOLE LOG SCELTA UTENTE
console.log(`L'utente ha scelto ----> ${userChoice}`);


// PROMPT NUMERO UTENTE
let userNumber = parseInt(prompt('Scegli un Numero tra 1 e 5!').trim());

// CONTROLLO NUMERO INSERITO DALL'UTENTE NEL PROMPT
while(isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt('Inserisci bene la tua Scelta! Scegli un Numero tra 1 e 5!').trim());
    
}

// CONSOLE LOG NUMERO UTENTE
console.log("L'utente ha scelto il numero ---->", userNumber);


// RICHIAMO FUNZIONE RANDOM_NUMBER
const computerNumber = randomNumber(1, 5);


// FUNZIONE CHE SOMMA IL NUMERO INSERITO DALL'UTENTE E IL NUMERO RANDOM DEL COMPUTER, E DICHIARA SE L'UTENTE HA VINTO O HA PERSO
function sumNumber(userNumber, computerNumber){

    // EFFETTUO LA SOMMA DEI DUE NUMERI
    const sumNumber = userNumber + computerNumber;

    // CONTROLLO RISULTATO
    if (sumNumber % 2 === 0 && userChoice === "PARI"){ // LA SOMMA È PARI E L'UTENTE HA SCELTO PARI

        console.log(`Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Complimenti hai Vinto!`);

    } else if (sumNumber % 2 !== 0 && userChoice === "DISPARI"){ // LA SOMMA È DISPARI E L'UTENTE HA SCELTO DISPARI

        console.log(`Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Complimenti hai Vinto!`);

    } else{  // LA SOMMA È PARI E L'UTENTE HA SCELTO DISPARI, OPPURE LA SOMMA È DISPARI E L'UTENTE HA SCELTO PARI

        console.log(`Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Mi Dispiace hai Perso!`);
    }
}

// RICHIAMO FUNZIONE SUM_NUMBER
sumNumber(userNumber, computerNumber);