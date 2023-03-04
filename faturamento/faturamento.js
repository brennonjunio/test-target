// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

function resultMaior() {
  fetch("./faturamento.json")
    .then((response) => response.json())
    .then((response) => {
      const max = response.reduce(
        (max, item) => {
          return item.valor > max.valor ? item : max;
        },
        { valor: 0 }
      );

      document.querySelector("#maiorDia").textContent = max.dia;
      document.querySelector("#maiorValor").textContent = max.valor;
    });
}
resultMaior();

function resultMenor() {
  fetch("./faturamento.json")
    .then((response) => response.json())
    .then((response) => {
      const min = response.reduce(
        (min, item) => {
          if (item.valor !== 0 && item.valor < min.valor) {
            // 2 condições  valor diferente de 0 e o valor atul menor que o minimo
            return item;
          } else {
            return min;
          }
        },
        { valor: Infinity } //infinite faz com que o primeiro valor da array seja o menor até que o menor valor seja encontrado.
      );

      document.querySelector("#menorDia").textContent = min.dia;
      document.querySelector("#menorValor").textContent = min.valor;
    });
}
resultMenor();

function mediaMensal() {
  fetch("./faturamento.json")
    .then((response) => response.json())
    .then((response) => {
      const media = response.reduce((media, item) => {
        if (item.valor !== 0) {
          // 2 condições  valor diferente de 0 e o valor atul menor que o mediaimo
          return item;
        } else {
          return media;
        }
      });

      document.querySelector("#qtdDias").textContent = media.dia;
      document.querySelector("#mediaDias").textContent = media.valor;
    });
}
mediaMensal();

function diasNaMedia() {
  fetch("./faturamento.json")
    .then((response) => response.json())
    .then((response) => {
      let diasAcimaMedia = 0;
      let sum = 0; // Variável para armazenar a soma dos valores
      let dias = 0; // Variável para armazenar a quantidade de dias com venda
      for (
        let i = 0;
        i < response.length;
        i++ //length diz quantos objetos tem na response
      ) {
        const item = response[i];
        if (item.valor !== 0) {
          // Verifica se o valor é diferente de zero
          sum += item.valor; // Adiciona o valor à soma
          dias++; // Incrementa o contador
        }
      }
      const media = sum / dias; // Calcula a média dos valores
      for (
        let i = 0;
        i < response.length;
        i++ //length diz quantos objetos tem na response
      ) {
        const item = response[i];
        if (item.valor > media) {
          diasAcimaMedia++; // Incrementa o contador de dias com faturamento acima da média
        }
      }
      diasNaMedia();
      document.querySelector("#qtdDias").textContent = dias; // Exibe a quantidade de dias com venda
      document.querySelector("#mediaDias").textContent = media.toFixed(2); // Exibe a média com duas casas decimais
      document.querySelector("#media-dia").textContent = diasAcimaMedia;
    });
}
diasNaMedia();

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

function distribuidora() {
  fetch("./distribuidora.json")
    .then((response) => response.json())
    .then((response) => {
      const total = response.reduce(
        (sum, uff) => sum + parseFloat(uff.valor), //o ParseFloat transforma a string em Float
        0
      );
      console.log(total);
      response.forEach((item) => {
        const percentual = (parseFloat(item.valor) / total) * 100;
        console.log(`${item.uf} - R$${item.valor} - ${percentual.toFixed(2)}%`);
      });
    });
}
distribuidora();

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let nome = "brennon";

let invert = "";

for (let i = nome.length - 1; i >= 0; i--) {
  invert += nome[i];
}
console.log(`nome: ${nome}`);
console.log(`Nome Invertido: ${invert}`);
