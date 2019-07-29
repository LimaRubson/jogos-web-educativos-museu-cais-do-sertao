var palavras = ["museu", "gibao", "sertao"];

console.log(palavras.toString());

palavras.sort();

console.log(palavras.toString());

var rx = /[a-z]/gi;
var m = palavras[0].match(rx);

console.log(palavras[0]);

var tamanhoArray = m.length;

console.log(tamanhoArray);

var parentElement; 
var childElement; 
var appendChildElement;

for(var indice = 0; indice < tamanhoArray; indice++) {
    parentElement = document.getElementById("palavra");
    childElement = document.createElement('span');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "_____ ";
}

function verificaLetra() {
    var letter = document.getElementById("letter").value;
    for(var indice = 0; indice < tamanhoArray; indice++) {
        if(letter == palavras[0].charAt(indice)) {
            console.log(letter);
            console.log(document.getElementsByTagName('span')[indice].innerHTML = letter + " ");
        }
    }
    parentElement = document.getElementById("letras");
    childElement = document.createElement('span');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = letter + " ";
}