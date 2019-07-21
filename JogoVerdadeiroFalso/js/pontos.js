function pontos(value, index, array) {
    if (value === respostasJogador[index]) {
        acertos++;
        console.log(index);
        console.log(value);
        console.log(respostasJogador[index]);
    }
    else {
        erros++;
        console.log(index);
        console.log(value);
        console.log(respostasJogador[index]);
    }
}
