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
    console.log(randomNumber);

    return randomNumber;
}