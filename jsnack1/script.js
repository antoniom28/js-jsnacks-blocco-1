/*Crea un array vuoto e chiedi all’utente un numero
 da inserire nell’array. Continua a chiedere i 
 numeri all’utente e a inserirli nell’array fino a
  quando la somma degli elementi è minore di 50*/

let array = [];
let somma = 0;
let limite = 50;
do{
    somma += parseInt(prompt('inserisci un numero'));
}while(somma < limite);
document.writeln(somma);