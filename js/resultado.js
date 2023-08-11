const resultado = document.querySelector("#resultado");
const statusIMC = document.querySelector("#status");
const info = document.querySelector("#info");

let peso = parseFloat(localStorage.getItem("peso").replace(",", "."));
let altura = parseFloat(localStorage.getItem("altura").replace(",", "."));
console.log(altura)
let imc = peso / (altura ** 2);
let color = "";

resultado.innerHTML = imc.toFixed(2);

if (imc < 18.5) {
  statusIMC.innerHTML = "Abaixo do peso";
  color = "#0057d0"
} else if (imc < 25) {
  statusIMC.innerHTML = "Peso ideal";
  color = "#3caa30";
} else if (imc < 30) {
  statusIMC.innerHTML = "Sobrepeso";
  color = "#ddbc01";
} else if (imc < 35) {
  statusIMC.innerHTML = "Obesidade grau I";
  color = "#dd9401";
} else if (imc < 40) {
  statusIMC.innerHTML = "Obesidade grau II";
  color = "#dd5d01";
} else {
  statusIMC.innerHTML = "Obesidade grau III (mórbida)";
  color = "#ce0000";
}

statusIMC.style.color = color;

let percaPeso;
let ganhoPeso;

if (imc >= 0.01) {
  percaPeso = peso - ((24.99 * peso) / imc) + 1;
  ganhoPeso = ((18.5 * peso) / imc) - peso + 1;

  if (imc > 25) {
    info.innerHTML = `Você precisará perder <strong style=color"bc0000">${Math.round(percaPeso)}kg</strong> para estar no <strong style="color: #3caa3c">Peso Ideal</strong>`;
  } else if (imc < 18.5) {
    info.innerHTML = `Você precisará ganhar <strong style=color"0057d0">${Math.round(ganhoPeso)}kg</strong> para estar no <strong style="color:#0057d0">Peso Ideal</strong>`;
  } else {
    info.innerHTML = "Parabéns";
  }
}