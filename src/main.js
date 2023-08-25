const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;


function updateResult(originClear = false) {
  result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

// Função para adicionar o dígito no resultado
function addDigit(digit) {
  if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

  if (restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  updateResult();
}

// Verifica se já possui 2 números para operação e clique numa operação já realiza o cálculo
function setOperator(newOperator) {
  if (currentNumber) {
    calculate();

    firstOperand = parseFloat(currentNumber.replace(",", "."));
    currentNumber = "";
  }

  operator = newOperator;
}

// Função para realizar o cálculo , verificando se tem o primeiro número e o operador
function calculate() {
  if (operator === null || firstOperand === null) return;
  let secondOperand = parseFloat(currentNumber.replace(",", "."));
  let resultValue;

  switch (operator) {
    case "+":
      resultValue = firstOperand + secondOperand;
      break;
    case "-":
      resultValue = firstOperand - secondOperand;
      break;
    case "×":
      resultValue = firstOperand * secondOperand;
      break;
    case "÷":
      resultValue = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  // Verifica se o resultado tem mais que 5 casas decimais, se tiver, fixa em 5 para não ficar muito grande.
  if (resultValue.toString().split(".")[1]?.length > 5) {
    currentNumber = parseFloat(resultValue.toFixed(5)).toString();
  } else {
    currentNumber = resultValue.toString();
  }

  // Depois de realizar o cálculo ele limpa as variáveis
  operator = null;
  firstOperand = null;
  restart = true;
  updateResult();
}

// Função para limpar a caculadora ao clicar no C
function clearCalculator() {
  currentNumber = "";
  firstOperand = null;
  operator = null;
  updateResult(true);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    //Verifica se o botão clicado é de 0 a 9 ou vírgula e chama a função addDigit
    if (/^[0-9,]+$/.test(buttonText)) {
      addDigit(buttonText);
      // Verifica se o botão clicado foi um operador, se for chama a função setOperator
    } else if (["+", "-", "×", "÷"].includes(buttonText)) {
      setOperator(buttonText);
    } else if (buttonText === "=") {
      calculate();
    } else if (buttonText === "C") {
      clearCalculator();
    } 
  });
});