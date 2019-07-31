var palavras = ["museu", "gibao", "sertao"];
var indiceRandom = Math.floor((Math.random() * 3) + 0);
var countCompleteWord = 0;

console.log(palavras.toString());

var rx = /[a-z]/gi;
var m = palavras[indiceRandom].match(rx);

console.log(palavras[indiceRandom]);

var tamanhoArray = m.length;

console.log(tamanhoArray);

var parentElement; 
var childElement; 
var appendChildElement;

for(var indice = 0; indice < tamanhoArray; indice++) {
    parentElement = document.getElementById("palavra");
    childElement = document.createElement('span');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = "__ ";
}

function verificaLetra() {
    var letter = document.getElementById("letter").value;
    for(var indice = 0; indice < tamanhoArray; indice++) {
        if(letter == palavras[indiceRandom].charAt(indice)) {
            countCompleteWord++;
            console.log(letter);
            console.log(document.getElementsByTagName('span')[indice].innerHTML = letter + " ");
        }
    }
    parentElement = document.getElementById("letras");
    childElement = document.createElement('span');
    appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = letter + " ";

    if(countCompleteWord == tamanhoArray) {
        document.getElementById("palavra-adivinhada").innerHTML = palavras[indiceRandom];
        document.getElementById("myModal").style.display = "block";
    }
}

function dicas() {
    if(palavras[indiceRandom] == "museu") {
        document.getElementById("dicas_palavra").innerHTML = "Um lugar onde tem obras de artes";
    } else if(palavras[indiceRandom] == "gibao") {
            document.getElementById("dicas_palavra").innerHTML = "Uma peça sobre o sertão";
    } else if(palavras[indiceRandom] == "sertao") {
            document.getElementById("dicas_palavra").innerHTML = "Um lugar onde tem muita falta de água";
    }
    document.getElementById("myModalDicas").style.display = "block";
}

function fechaDicas() {
    document.getElementById("myModalDicas").style.display = "none";
}

document.getElementById("close").addEventListener("click", function() {
    document.location.reload();
});
