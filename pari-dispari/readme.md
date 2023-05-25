PROBLEMA : Crea un Programma dove l’utente sceglie Pari o Dispari ed inserisce un numero da 1 a 5. Genera un Numero Random (sempre da 1 a 5) per il Computer (usando una funzione). Sommiamo i due Numeri e stabiliamo se la Somma dei due Numeri è Pari o Dispari (usando una funzione). Alla fine Dichiariamo chi ha Vinto.


- Stampa un alert che spiega all'utente come funziona questo programma;


- Crea una funzione (randomNumber(min, max)) che genera un Numero Random da 1 a 5 per il Computer;

    - Genera il Numero Random ed inseriscilo dentro una Constante (randomNumber);

    - Stampa nella Console (randomNumber);

    - Ritorna (return) la Constante (randomNumber);


- Fai scegliere all'utente, tramite un Prompt, tra "pari" o "dispari", ed inserisci la scelta dentro una Variabile (userChoice);

    - Stampa nella Console (userChoice);

- Dopo che l'utente a scelto, richiedigli, sempre tramite un Prompt, di inserire un numero a sua scelta da 1 a 5, fai il parseInt, ed inserisci il Numero dentro una Variabile (userNumber);

    - Stampa nella Console (userNumber);


- Richiama la funzione (randomNumber(1, 5)) e inseriscila dentro una Constante (computerNumber);


- Crea una funzione (sumNumber(userNumber, computerNumber)) che somma il Numero inserito dall'utente e il Numero Random del Computer:

    - Effettua la SOMMA (userNumber + computerNumber) ed inserisci il Risultato dentro una Constante (sumNumber);


    - ? SE la SOMMA è PARI, E, l'utente ha scelto PARI ALLORA:

        - Stampa nella Console il seguente messaggio: `Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Complimenti hai Vinto!`;

    - ALTRIMENTI SE la SOMMA è DISPARI, E, l'utente ha scelto DISPARI ALLORA:

        - Stampa nella Console il seguente messaggio: `Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Complimenti hai Vinto!`;

    - ALTRIMENTI : Stampa nella Console il seguente messaggio: `Hai scelto ${userChoice}, la Somma dei due Numeri è ${sumNumber}, Mi Dispiace hai Perso!`.