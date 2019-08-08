qtd_palavra = 5;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quantidadePalavras").innerText = qtd_palavra;
});

document.getElementById("museu_M").addEventListener("click", function() {
    document.getElementById("museu_M").style.backgroundColor = "green";
    document.getElementById("museu_M").style.color = "white";
});

document.getElementById("museu_U_02").addEventListener("click", function() {
    if(document.getElementById("museu_M").style.backgroundColor == "green") {
        document.getElementById("museu_U_01").style.backgroundColor = "green";
        document.getElementById("museu_U_01").style.color = "white";

        document.getElementById("museu_S").style.backgroundColor = "green";
        document.getElementById("museu_S").style.color = "white";

        document.getElementById("museu_E").style.backgroundColor = "green";
        document.getElementById("museu_E").style.color = "white";

        document.getElementById("museu_U_02").style.backgroundColor = "green";
        document.getElementById("museu_U_02").style.color = "white";

        qtd_palavra--;
        document.getElementById("quantidadePalavras").innerText = qtd_palavra;
    }

    if(qtd_palavra == 0) {
        document.getElementById("palavra_01").innerHTML = "MUSEU";
        document.getElementById("palavra_02").innerHTML = "GIBAO";
        document.getElementById("palavra_03").innerHTML = "VAQUEIRO";
        document.getElementById("palavra_04").innerHTML = "SERTAO";
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("gibao_G").addEventListener("click", function() {
    document.getElementById("gibao_G").style.backgroundColor = "green";
    document.getElementById("gibao_G").style.color = "white";
});

document.getElementById("gibao_O").addEventListener("click", function() {
    if(document.getElementById("gibao_G").style.backgroundColor == "green") {
        document.getElementById("gibao_I").style.backgroundColor = "green";
        document.getElementById("gibao_I").style.color = "white";

        document.getElementById("gibao_B").style.backgroundColor = "green";
        document.getElementById("gibao_B").style.color = "white";

        document.getElementById("gibao_A").style.backgroundColor = "green";
        document.getElementById("gibao_A").style.color = "white";

        document.getElementById("gibao_O").style.backgroundColor = "green";
        document.getElementById("gibao_O").style.color = "white";

        qtd_palavra--;
        document.getElementById("quantidadePalavras").innerText = qtd_palavra;
    }

    if(qtd_palavra == 0) {
        document.getElementById("palavra_01").innerHTML = "MUSEU";
        document.getElementById("palavra_02").innerHTML = "GIBAO";
        document.getElementById("palavra_03").innerHTML = "VAQUEIRO";
        document.getElementById("palavra_04").innerHTML = "SERTAO";
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("vaqueiro_V").addEventListener("click", function() {
    document.getElementById("vaqueiro_V").style.backgroundColor = "green";
    document.getElementById("vaqueiro_V").style.color = "white";
});

document.getElementById("vaqueiro_O").addEventListener("click", function() {
    if(document.getElementById("vaqueiro_V").style.backgroundColor == "green") {
        document.getElementById("vaqueiro_A").style.backgroundColor = "green";
        document.getElementById("vaqueiro_A").style.color = "white";

        document.getElementById("vaqueiro_Q").style.backgroundColor = "green";
        document.getElementById("vaqueiro_Q").style.color = "white";

        document.getElementById("vaqueiro_U").style.backgroundColor = "green";
        document.getElementById("vaqueiro_U").style.color = "white";

        document.getElementById("vaqueiro_E").style.backgroundColor = "green";
        document.getElementById("vaqueiro_E").style.color = "white"

        document.getElementById("vaqueiro_I").style.backgroundColor = "green";
        document.getElementById("vaqueiro_I").style.color = "white";

        document.getElementById("vaqueiro_R").style.backgroundColor = "green";
        document.getElementById("vaqueiro_R").style.color = "white";

        document.getElementById("vaqueiro_O").style.backgroundColor = "green";
        document.getElementById("vaqueiro_O").style.color = "white";

        qtd_palavra--;
        document.getElementById("quantidadePalavras").innerText = qtd_palavra;
    }
    if(qtd_palavra == 0) {
        document.getElementById("palavra_01").innerHTML = "MUSEU";
        document.getElementById("palavra_02").innerHTML = "GIBAO";
        document.getElementById("palavra_03").innerHTML = "VAQUEIRO";
        document.getElementById("palavra_04").innerHTML = "SERTAO";
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("sertao_S").addEventListener("click", function() {
    document.getElementById("sertao_S").style.backgroundColor = "green";
    document.getElementById("sertao_S").style.color = "white";
});

document.getElementById("sertao_O").addEventListener("click", function() {
    if(document.getElementById("sertao_S").style.backgroundColor == "green") {
        document.getElementById("sertao_O").style.backgroundColor = "green";
        document.getElementById("sertao_O").style.color = "white";

        document.getElementById("sertao_E").style.backgroundColor = "green";
        document.getElementById("sertao_E").style.color = "white";

        document.getElementById("sertao_R").style.backgroundColor = "green";
        document.getElementById("sertao_R").style.color = "white";

        document.getElementById("sertao_T").style.backgroundColor = "green";
        document.getElementById("sertao_T").style.color = "white";

        document.getElementById("sertao_A").style.backgroundColor = "green";
        document.getElementById("sertao_A").style.color = "white";

        qtd_palavra--;
        document.getElementById("quantidadePalavras").innerText = qtd_palavra;
    }

    if(qtd_palavra == 0) {
        document.getElementById("palavra_01").innerHTML = "MUSEU";
        document.getElementById("palavra_02").innerHTML = "GIBAO";
        document.getElementById("palavra_03").innerHTML = "VAQUEIRO";
        document.getElementById("palavra_04").innerHTML = "SERTAO";
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("seca_S").addEventListener("click", function() {
    document.getElementById("seca_S").style.backgroundColor = "green";
    document.getElementById("seca_S").style.color = "white";
});

document.getElementById("seca_A").addEventListener("click", function() {
    if(document.getElementById("seca_S").style.backgroundColor == "green") {
        document.getElementById("seca_E").style.backgroundColor = "green";
        document.getElementById("seca_E").style.color = "white";

        document.getElementById("seca_C").style.backgroundColor = "green";
        document.getElementById("seca_C").style.color = "white";

        document.getElementById("seca_A").style.backgroundColor = "green";
        document.getElementById("seca_A").style.color = "white";

        qtd_palavra--;
        document.getElementById("quantidadePalavras").innerText = qtd_palavra;
    }
    if(qtd_palavra == 0) {
        document.getElementById("palavra_01").innerHTML = "MUSEU";
        document.getElementById("palavra_02").innerHTML = "GIBAO";
        document.getElementById("palavra_03").innerHTML = "VAQUEIRO";
        document.getElementById("palavra_04").innerHTML = "SERTAO";
        document.getElementById("myModal").style.display = "block";
    }
});

document.getElementById("close").addEventListener("click", function() {
    document.location.reload();
});
