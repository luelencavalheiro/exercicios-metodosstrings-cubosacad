const comentario = "Esse COVID é muito perigoso!";
let resposta = false;

const palavrasBloqueadas = ["COVID", "covid", "Covid", "PANDEMIA", "pandemia", "Pandemia"];

for (let palavra of palavrasBloqueadas) {
    resposta = comentario.includes(palavra);

    if (resposta === true) {
        console.log("Comentário bloqueado por conter palavras proibidas");
        break;
    }
}

if (resposta === false) {
    console.log("Comentário autorizado");
}
