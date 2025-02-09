let display = document.getElementById("display");
let currentInput = "";
let lastInput = "";
let currentOperator = "";

function appendNumber(value) {
    if (lastInput === "=") {
        clearDisplay();
    }
    currentInput += value;
    display.textContent = currentInput;
    lastInput = value;
}

function appendOperator(operator) {
    if (currentInput === "" && operator !== "-") return; // Permite "-" no começo
    if (isNaN(lastInput) && lastInput !== "") return; // Evita operadores consecutivos

    currentInput += operator;
    display.textContent = currentInput;
    lastInput = operator;
}

function calculate() {
    try {
        let result = new Function("return " + currentInput)(); // Alternativa mais segura que eval
        if (!isFinite(result)) throw new Error("Erro");

        currentInput = result % 1 === 0 ? result.toString() : result.toFixed(2); // Formatação
        display.textContent = currentInput;
        lastInput = "=";
    } catch {
        display.textContent = "Erro";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
    lastInput = "";
}

// Função específica para multiplicação
function multiply() {
    let numbers = currentInput.split(/[\+\-\*\/]/).map(Number); // Divide os números
    if (numbers.length < 2) return; // Se houver menos de dois números, não faz nada

    let result = numbers[numbers.length - 2] * numbers[numbers.length - 1]; // Multiplica os dois últimos números
    currentInput = currentInput.replace(/[\d\.]+$/, result.toString()); // Substitui o último número pelo resultado
    display.textContent = currentInput;
}
