const nome = 'Luelen Cavalheiro';

const gerarNickname = (nome) => {
    const nomeUsuario = nome.trim().toLowerCase().split(" ");
    let nomeSemEspaco = "";

    for (const item of nomeUsuario) {
        nomeSemEspaco += item;
    }

    const nickname = nomeSemEspaco.slice(0, 12);

    console.log(`@${nickname}`);

}

gerarNickname(nome);