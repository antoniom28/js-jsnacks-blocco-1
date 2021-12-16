let N = parseInt(prompt('quanti array?'));
let array = [];
let array2D = [];
document.writeln('<h4> array2D che mantiene tutti i valori.. Avevo interpretato male la traccia </h4>');
for(let i = 0; i<N; i++){
    array = [];
    for(let j = 0; j<10; j++)
        array[j] = Math.floor(Math.random()*100+1);
    array2D[i] = array;
}
for(let i = 0; i<N; i++)
    document.writeln(`${i+1}° Array : ${array2D[i]} <br><br>`);

/*AVEVO INTERPRETATO MALE. NON CI CREDO.... */
document.writeln('<h4>mantiene solo l\'ultimo valore. Esercizio "giusto" secondo la traccia </h4>');
let nUtente = parseInt(prompt('quanti array?'));
let numeri = [];
let index = 0;
while(index != nUtente){
    for(let i = 0; i<10; i++)
        numeri[i] = Math.floor(Math.random()*100+1);
        document.writeln(`${index+1}° Array : ${numeri} <br><br>`);
    index++;
}