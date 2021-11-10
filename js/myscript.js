//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const mail = prompt("Inserisci dal punto di vista stilistico dell'emai");
const mail_List = ['mickey@disney.com', 'donald@disney.com', 'goofy@disney.com', 'daisy@disney.com', 'unclescrooge@disney.com'];

let sentinel = false;
let i;
let n;

for ( i= 0; i < mail_List.length; i++){

    if ( mail == mail_List[i]){
        n = i;
        sentinel = true;
    }
}

const box = document.getElementById('mailBox');

if (sentinel){
    box.innerHTML = "Your are in the list! " + mail_List[n];
}else{
    box.innerHTML = 'Sorry, we don\'t konw you! "' + mail + '"';
}    






//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// userNum = parseInt(prompt('Insert a number'));
userNum = Math.floor(Math.random() * 6) + 1;
randomNum = Math.floor(Math.random() * 6) + 1;


const luckyBox = document.getElementById('luckyBox');
const user = document.getElementById('user');
const machine = document.getElementById('machine');

user.innerHTML = 'User ' + userNum;
machine.innerHTML = 'Machine ' + randomNum;


if ( userNum > randomNum ){
    luckyBox.innerHTML = 'User Wins';
}else{
    if ( userNum < randomNum ){
        luckyBox.innerHTML = 'Machine Wins';
    }else{
        luckyBox.innerHTML = 'Even Game';
    }
}