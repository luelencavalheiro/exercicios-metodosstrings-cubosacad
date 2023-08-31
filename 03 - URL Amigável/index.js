const texto = "Aprenda programar do zero na Cubos Academy";

const url = texto.toLowerCase().split(" ");
let urlFormatada = '';

for (let i = 0; i < url.length; i++) {

    urlFormatada += `-${url.length[i]}`;

}
console.log(urlFormatada);