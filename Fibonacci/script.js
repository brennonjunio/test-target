let nu = parseInt(prompt("Informe um número:"));
let f = [0, 1];

// Cálculo da sequência de Fibonacci
f.forEach(function (valor, indice) {
  if (indice >= 2) {
    f[indice] = f[indice - 1] + f[indice - 2];
  }
});

// Verifica se o número informado pertence à sequência
if (f.includes(nu)) {
  console.log(nu + " pertence.");
} else {
  console.log(nu + " não pertence.");
}
