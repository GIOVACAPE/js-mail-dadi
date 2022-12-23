/*

    STEP:
    1) generare un numero random per l'utente da 1 a 6
    2) generare un numero random per il computer da 1 a 6
    3) Confrontare i punteggi
    3a) SE il numero dell'utente è più ALTO, dire che ha vinto l'utente
    3b) SE il numero del computer è più alto, dire che ha vinto il computer
    4) ALTRIMENTI dire che c'è stato pareggio

*/

const userNumber = Math.floor(Math.random() * 6 + 1);
const pcNumber = Math.floor(Math.random() * 6 + 1);

console.log('userNumber' , userNumber, typeof userNumber);
console.log('pcNumber' , pcNumber, typeof pcNumber);

if (userNumber > pcNumber ){
    alert('Hai vinto, BRAVO !!');
    console.log('Utente vince con numero + grande', userNumber);
    console.log('PC perde perchè ha il numero + piccolo', pcNumber);
}
else if (userNumber < pcNumber){
        alert('Hai perso, mi spiace');
        console.log('Utente perde perchè ha il numero piccolo', userNumber);
        console.log('PC vince  perchè ha il numero + grande', pcNumber);
        
}
else {
    alert('Pareggio');
    console.log('Utente e PC pareggiano con numero' , userNumber);
}