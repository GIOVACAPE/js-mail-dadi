/*

STEP:
1) chiedi EMAIL
2) valida EMAIL
3) crea una lista
4) per ogni elemento della lista:
4a) Controllo se l'elemento attuale è uguale all'email inserita dall'utente
4aa)SE i due elementi corrispondo, so che l'utente può entrare e lo avviso
4ab) ALTRIMENTI, l'utente non può entrare e lo avviso

*/


const userEmail = prompt('Potresti lasciare la tua Email, grazie :)')
console.log('userEmail', userEmail, typeof userEmail)

const members = [

    'ciccio@gmail.com' ,
    'patatino@libero.it' , 
    'pluto@yahoo.it'  ,
    'ilfratm@alice.it' ,


];

let validEmail = true;
if(validEmail == true) {

    for (let i = 0; i < members.length; i++) {
        console.log('members[i]' , i, members[i], typeof members[i]);

        if (members[i] == userEmail) {
            message = 'puoi entrare';
        }
        // else{
        //     message = 'puoi entrare';
        // }
    }
    
    alert(message);

}

else {
    alert ('Email non valida, non ti faccio entrare!! ')
}
    
