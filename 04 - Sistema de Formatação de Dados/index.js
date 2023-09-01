let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// verificando se o identificador tem 6 digitos
if (identificador != 6) {

    identificador = identificador.padStart(6, "0")
}

// formatando o nome
let nomeFormatado = "";
const arrayNome = nome.split(" ");
for (let item of arrayNome) {
    let primeiraLetra = item.slice(0, 1);
    let restanteNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteNome.toLowerCase() + " ";

}
nomeFormatado.trim();

// formatando email
email = email.trim()

console.log(identificador);
console.log(nomeFormatado);
console.log(email);

