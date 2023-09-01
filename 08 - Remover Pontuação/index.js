const cpf = "011.022.033-44";
const cnpj = "11.022.033/0001-22"

const removerPonto = (numero) => {
    const numeros = numero.replace("-", "").replace("/", "").split(".");
    let numeroLimpo = "";

    for (const item of numeros) {
        numeroLimpo += item;
    }

    console.log(numeroLimpo);

}


removerPonto(cpf);
removerPonto(cnpj);