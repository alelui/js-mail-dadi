// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const mail = prompt("Inserisci dal punto di vista stilistico dell'emai");
const mail_List = ['astag@pippo.com', 'bastag@pippo.com', 'castag@pippo.com'];

let sentinel = false;
let i;
for ( i= 0; i < mail_List.length && sentinel==false; i++){

    if ( mail == mail_List[i]){
        sentinel = true;
    }
}

if (sentinel){
    console.log("La tua mail é: " + mail_List[i]);
}else{
    console.log("La tua mail non esiste");
}    

