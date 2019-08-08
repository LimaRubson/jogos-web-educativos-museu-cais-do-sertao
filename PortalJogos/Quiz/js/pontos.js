function pontos(value, index, array) {
    if (respostasJogadorBooleana[index] === "VERDADEIRO") {
        acertos++;
        console.log(index);
        console.log(value);
        console.log(respostasJogadorBooleana[index]);
    }
    else {
        erros++;
        console.log(index);
        console.log(value);
        console.log(respostasJogadorBooleana[index]);
    }
}
