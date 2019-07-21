var perguntas = ["O Museu Cais do Sertão é um museu sobre o Sertão e Luiz Gonzaga?", "O Museu Cais do Sertão teve como curadora e diretora de criação a socióloga pernambucana Isa Grinspum Ferraz?", "O Museu Cais do Sertão tem 8 anos desde da inauguração?"]
var respostasJogador = [];
var respostaOficial = ["VERDADEIRO", "VERDADEIRO", "FALSO"];
var indice = 0;
var acertos = 0;
var erros = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pergunta").innerText = perguntas[indice];
    document.getElementById("resposta01").innerHTML = "Verdadeiro";
    document.getElementById("resposta02").innerHTML = "Falso";
});

document.getElementById("resposta01").addEventListener("click", function() {
    respostasJogador[indice] = "VERDADEIRO";
    indice++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        if(respostasJogador[0] != respostaOficial[0]) {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
        }
        if(respostasJogador[1] != respostaOficial[1]) {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
        }
        if(respostasJogador[2] != respostaOficial[2]) {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
        }
        document.getElementById("sua_resposta_01").innerHTML = "O Museu Cais do Sertão é um museu sobre o Sertão e Luiz Gonzaga? " + respostasJogador[0];
        document.getElementById("sua_resposta_02").innerHTML = "O Museu Cais do Sertão teve como curadora e diretora de criação a socióloga pernambucana Isa Grinspum Ferraz? " + respostasJogador[1];
        document.getElementById("sua_resposta_03").innerHTML = "O Museu Cais do Sertão tem 8 anos desde da inauguração? " + respostasJogador[2];
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta02").addEventListener("click", function() {
    respostasJogador[indice] = "FALSO";
    indice++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        if(respostasJogador[0] != respostaOficial[0]) {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
        }
        if(respostasJogador[1] != respostaOficial[1]) {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
        }
        if(respostasJogador[2] != respostaOficial[2]) {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
        }
        document.getElementById("sua_resposta_01").innerHTML = "O Museu Cais do Sertão é um museu sobre o Sertão e Luiz Gonzaga? " + respostasJogador[0];
        document.getElementById("sua_resposta_02").innerHTML = "O Museu Cais do Sertão teve como curadora e diretora de criação a socióloga pernambucana Isa Grinspum Ferraz? " + respostasJogador[1];
        document.getElementById("sua_resposta_03").innerHTML = "O Museu Cais do Sertão tem 8 anos desde da inauguração? " + respostasJogador[2];
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.location.reload();
});
