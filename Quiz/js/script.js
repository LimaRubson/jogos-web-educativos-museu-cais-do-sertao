var perguntas = ["O nome Olinda foi dado a partir de uma frase dita por:", "Qual era o nome da aldeia localizada onde Olinda é hoje?", "Quantas bacias hidrográficas Olinda possui?", "Qual o nome do país que invadiu Olinda em 1630?", "Qual desses títulos Olinda não possui?"]
var respostasJogador = [];
var respostaOficial = ["verdadeiro", "verdadeiro", "falso"];
var alternativas = [["Duarte Coelho", "João de Barros", "Pedro Lopes de Souza", "Martin Afonso"],["Guarani", "Marim", "Kaiowá", "Wajãpi"], ["1", "Nenhuma", "2", "3"], ["Portugal", "Espanha", "Alemanha", "Holanda"], ["Capital Brasileira da Cultura", "Monumento Internacional", "Patrimônio Histórico da Humanidade", "Cidade Ecológica"]]
var indiceAlternativas = 0;
var indice = 0;
var acertos = 0;
var erros = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pergunta").innerText = perguntas[indice];
    document.getElementById("resposta01").innerHTML = alternativas[0][0];
    document.getElementById("resposta02").innerHTML = alternativas[0][1];
    document.getElementById("resposta03").innerHTML = alternativas[0][2];
    document.getElementById("resposta04").innerHTML = alternativas[0][3];
    console.log(alternativas.toString());
});

document.getElementById("resposta01").addEventListener("click", function() {
    respostasJogador[indice] = "verdadeiro";
    indice++;
    indiceAlternativas++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta02").addEventListener("click", function() {
    respostasJogador[indice] = "falso";
    indice++;
    indiceAlternativas++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta03").addEventListener("click", function() {
    respostasJogador[indice] = "falso";
    indice++;
    indiceAlternativas++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta04").addEventListener("click", function() {
    respostasJogador[indice] = "falso";
    indice++;
    indiceAlternativas++;
    console.log(respostasJogador.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostaOficial.map(pontos);
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.location.reload();
});
