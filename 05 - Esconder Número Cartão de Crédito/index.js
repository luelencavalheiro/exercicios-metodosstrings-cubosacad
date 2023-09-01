const numeroCartao = '1111222233334444';

const primeirosNumeros = numeroCartao.slice(0, 4);
const ultimosNumeros = numeroCartao.slice(12);

const numeroCartaoFormatado = `${primeirosNumeros.padEnd(8, "*")} ${ultimosNumeros}`;

console.log(numeroCartaoFormatado);