
 import 
 let currentDisplay = '0';
  const display = document.getElementById("display");


function adicionar(valor) {
  const display = document.getElementById("display");
  display.value += valor;
}

function limpar() {
  const display = document.getElementById("display");
  display.value = "";
}

function calcular() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

function raiz() {
  if (!ligado) return;

  const display = document.getElementById("display");
  const valor = parseFloat(display.value);

  if (display.value === "" || isNaN(valor)) {
    display.value = "Erro";
    return;
  }

  if (valor < 0) {
    display.value = "Inválido";
    return;
  }

  display.value = Math.sqrt(valor);
}


