// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


const mail = prompt("Inserisci dal punto di vista stilistico dell'emai");
const mail_List = ['astag@pippo.com', 'bastag@pippo.com', 'castag@pippo.com'];

let sentinel = false;
let i;
let n;
for ( i= 0; i < mail_List.length; i++){

    if ( mail == mail_List[i]){
        n = i;
        sentinel = true;
    }
}

const box = document.getElementById('box');

if (sentinel){
    box.innerHTML = "La tua mail é: " + mail_List[n];
}else{
    box.innerHTML = "La mail " + mail + " non esiste";
}    



