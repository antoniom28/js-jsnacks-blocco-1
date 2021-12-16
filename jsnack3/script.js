/*si lo so, alcune cose potevo metterle in uno style e 
semplificarmi tutto, ma volevo sfidarmi a fare tutto con js! */

let array = randoSequence(5, 25);
document.writeln(`
<div class="container"" >
    <div id="rosso" class="row row-cols-5" style="color:red"></div>
    <div id="verde" class="row row-cols-5" style="color:green"></div>
</div>
`);

const rosso = document.getElementById('rosso');
const verde = document.getElementById('verde');
let applicaStile = [rosso,verde];

for(let i=0; i<applicaStile.length; i++){
    applicaStile[i].style.margin = "10px";
    applicaStile[i].style.backgroundColor = "whitesmoke";
}

let elemento;
for(let i=0; i<array.length; i++){
    elemento = document.createElement('div');
    elemento.className += ' col';
    elemento.innerHTML += `<div id="blocco${i}">${array[i]}</div>`;
    if(array[i] %2 == 0)
        verde.append(elemento);
    else
        rosso.append(elemento);
}

for(let i=0; i<array.length; i++){
    document.getElementById(`blocco${i}`).style.height = "50px";
    document.getElementById(`blocco${i}`).style.width = "50px";
    document.getElementById(`blocco${i}`).style.lineHeight = "3";
    document.getElementById(`blocco${i}`).style.textAlign = "center";
    document.getElementById(`blocco${i}`).style.backgroundColor = "#434d50";
    document.getElementById(`blocco${i}`).style.margin = "10px";
}