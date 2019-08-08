var perguntas = ["O curador(a) do Museu Cais do Sertão é:", "Onde está instalado um dos mais modernos equipamentos culturais do Brasil, o Cais do Sertão?", "Quantos territórios o Museu Cais do Sertão tem?", "Qual foi o ano de inauguração do Museu Cais do Sertão?", "Qual desses títulos o Museu Cais do Sertão possui?"]
var respostasJogadorBooleana = [];
var respostasJogador = [];
var respostaOficial = ["Isa Grinspum Ferraz", "Antigo Armazém 10 do Porto do Recife", "4", "2014", "Obra do Ano"];
var alternativas = [["Ricardo Brennand", "Isa Grinspum Ferraz", "Frederico Almeida", "Antônio Campos"],["Antigo Armazém 10 do Porto do Recife", "Recife, Pernambuco - Fundação Joaquim Nabuco", "Olinda, Pernambuco - Praça do Carmo", "Boa Viagem, Pernambuco - Praça de Boa Viagem"], ["1", "Nenhuma", "4", "3"], ["1990", "2000", "2014", "2010"], ["Obra do Ano", "Monumento Internacional", "Patrimônio Histórico da Humanidade", "Cidade Ecológica"]];
var respostasOficialBooleana = [["FALSO", "VERDADEIRO", "FALSO", "FALSO"],["VERDADEIRO", "FALSO", "FALSO", "FALSO"], ["FALSO", "FALSO", "VERDADEIRO", "FALSO"], ["FALSO", "FALSO", "VERDADEIRO", "FALSO"], ["VERDADEIRO", "FALSO", "FALSO", "FALSO"]];
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
    respostasJogadorBooleana[indice] = respostasOficialBooleana[indice][0];
    respostasJogador[indice] = alternativas[indiceAlternativas][0];
    indice++;
    indiceAlternativas++;
    console.log(respostasJogadorBooleana.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostasOficialBooleana.map(pontos);
        if(respostasJogadorBooleana[0] == "VERDADEIRO") {
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0]  + " " + respostaOficial[0];
        } else {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0] + " " + respostasJogador[0];
        }

        if(respostasJogadorBooleana[1] == "VERDADEIRO") {
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostaOficial[1];
        } else {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostasJogador[1];
        }

        if(respostasJogadorBooleana[2] == "VERDADEIRO") {
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostaOficial[2];
        } else {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostasJogador[2];
        }

        if(respostasJogadorBooleana[3] == "VERDADEIRO") {
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostaOficial[3];
        } else {
            document.getElementsByClassName("style-suas-respostas")[3].style.color = "red";
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostasJogador[3];
        }

        if(respostasJogadorBooleana[4] == "VERDADEIRO") {
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostaOficial[4];
        } else {
            document.getElementsByClassName("style-suas-respostas")[4].style.color = "red";
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostasJogador[4];
        }

        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta02").addEventListener("click", function() {
    respostasJogadorBooleana[indice] = respostasOficialBooleana[indice][1];
    respostasJogador[indice] = alternativas[indiceAlternativas][1];
    indice++;
    indiceAlternativas++;
    console.log(respostasJogadorBooleana.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostasOficialBooleana.map(pontos);
        if(respostasJogadorBooleana[0] == "VERDADEIRO") {
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0]  + " " + respostaOficial[0];
        } else {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0] + " " + respostasJogador[0];
        }

        if(respostasJogadorBooleana[1] == "VERDADEIRO") {
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostaOficial[1];
        } else {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostasJogador[1];
        }

        if(respostasJogadorBooleana[2] == "VERDADEIRO") {
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostaOficial[2];
        } else {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostasJogador[2];
        }

        if(respostasJogadorBooleana[3] == "VERDADEIRO") {
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostaOficial[3];
        } else {
            document.getElementsByClassName("style-suas-respostas")[3].style.color = "red";
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostasJogador[3];
        }

        if(respostasJogadorBooleana[4] == "VERDADEIRO") {
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostaOficial[4];
        } else {
            document.getElementsByClassName("style-suas-respostas")[4].style.color = "red";
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostasJogador[4];
        }

        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta03").addEventListener("click", function() {
    respostasJogadorBooleana[indice] = respostasOficialBooleana[indice][2];
    respostasJogador[indice] = alternativas[indiceAlternativas][2];
    indice++;
    indiceAlternativas++;
    console.log(respostasJogadorBooleana.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostasOficialBooleana.map(pontos);
        if(respostasJogadorBooleana[0] == "VERDADEIRO") {
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0]  + " " + respostaOficial[0];
        } else {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0] + " " + respostasJogador[0];
        }

        if(respostasJogadorBooleana[1] == "VERDADEIRO") {
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostaOficial[1];
        } else {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostasJogador[1];
        }

        if(respostasJogadorBooleana[2] == "VERDADEIRO") {
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostaOficial[2];
        } else {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostasJogador[2];
        }

        if(respostasJogadorBooleana[3] == "VERDADEIRO") {
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostaOficial[3];
        } else {
            document.getElementsByClassName("style-suas-respostas")[3].style.color = "red";
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + respostasJogador[3];
        }

        if(respostasJogadorBooleana[4] == "VERDADEIRO") {
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostaOficial[4];
        } else {
            document.getElementsByClassName("style-suas-respostas")[4].style.color = "red";
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + respostasJogador[4];
        }

        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("resposta04").addEventListener("click", function() {
    respostasJogadorBooleana[indice] = respostasOficialBooleana[indice][3];
    respostasJogador[indice] = alternativas[indiceAlternativas][3];
    indice++;
    indiceAlternativas++;
    console.log(respostasJogadorBooleana.toString());
    if(indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice];
        document.getElementById("resposta01").innerHTML = alternativas[indiceAlternativas][0];
        document.getElementById("resposta02").innerHTML = alternativas[indiceAlternativas][1];
        document.getElementById("resposta03").innerHTML = alternativas[indiceAlternativas][2];
        document.getElementById("resposta04").innerHTML = alternativas[indiceAlternativas][3];
        console.log(alternativas.toString());
    } else {
        respostasOficialBooleana.map(pontos);
        if(respostasJogadorBooleana[0] == "VERDADEIRO") {
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0]  + " " + respostaOficial[0];
        } else {
            document.getElementsByClassName("style-suas-respostas")[0].style.color = "red";
            document.getElementById("sua_resposta_01").innerHTML = perguntas[0] + " " + respostasJogador[0];
        }

        if(respostasJogadorBooleana[1] == "VERDADEIRO") {
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostaOficial[1];
        } else {
            document.getElementsByClassName("style-suas-respostas")[1].style.color = "red";
            document.getElementById("sua_resposta_02").innerHTML = perguntas[1] + " " + respostasJogador[1];
        }

        if(respostasJogadorBooleana[2] == "VERDADEIRO") {
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostaOficial[2];
        } else {
            document.getElementsByClassName("style-suas-respostas")[2].style.color = "red";
            document.getElementById("sua_resposta_03").innerHTML = perguntas[2] + " " + respostasJogador[2];
        }

        if(respostasJogadorBooleana[3] == "VERDADEIRO") {
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + " " + respostaOficial[3];
        } else {
            document.getElementsByClassName("style-suas-respostas")[3].style.color = "red";
            document.getElementById("sua_resposta_04").innerHTML = perguntas[3] + respostasJogador[3];
        }

        if(respostasJogadorBooleana[4] == "VERDADEIRO") {
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostaOficial[4];
        } else {
            document.getElementsByClassName("style-suas-respostas")[4].style.color = "red";
            document.getElementById("sua_resposta_05").innerHTML = perguntas[4] + " " + respostasJogador[4];
        }

        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.location.reload();
});
