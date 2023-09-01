const nomeArquivo = 'Foto da Familia.png';

const validarArquivo = (arquivo) => {
    const extensao = arquivo.slice(arquivo.lastIndexOf(".") + 1);


    if (extensao === "jpg" || extensao == "jpeg" || extensao === "png" || extensao === "git") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validarArquivo(nomeArquivo);
