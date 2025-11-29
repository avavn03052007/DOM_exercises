let firstValue = null;
let currentValue = '0';
let operator = null;
let justCalculated = false;

const screenEl = document.getElementById('screen');

function updateScreen() {
  screenEl.textContent = currentValue;
}

function appendNumber(num) {
  if (justCalculated) {
    currentValue = num;
    justCalculated = false;
    operator = null;
    firstValue = null;
    updateScreen();
    return;
  }

  if (currentValue === '0') {
    currentValue = num;
  } else {
    currentValue += num;
  }
  updateScreen();
}

function appendDot() {
  if (justCalculated) {
    currentValue = '0.';
    justCalculated = false;
    operator = null;
    firstValue = null;
    updateScreen();
    return;
  }
  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateScreen();
  }
}

function setOperator(opChar) {
  if (operator && firstValue !== null && currentValue !== '') {
    calculate();
    operator = opChar;
    justCalculated = false;
    return;
  }

  firstValue = parseFloat(currentValue);
  operator = opChar;
  justCalculated = false;
  currentValue = '0';
  updateScreen();
}

function deleteOne() {
  if (justCalculated) {
    justCalculated = false;
  }
  if (currentValue.length <= 1) {
    currentValue = '0';
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  updateScreen();
}

function clearAll() {
  firstValue = null;
  currentValue = '0';
  operator = null;
  justCalculated = false;
  updateScreen();
}

function calculate() {
  if (operator === null || firstValue === null) return;

  const secondValue = parseFloat(currentValue);
  let result;

  switch (operator) {
    case '+': result = firstValue + secondValue; break;
    case '−': result = firstValue - secondValue; break;
    case '×': result = firstValue * secondValue; break;
    case '÷': result = secondValue === 0 ? NaN : firstValue / secondValue; break;
    default: return;
  }

  if (!isFinite(result) || isNaN(result)) {
    currentValue = 'Error';
  } else {
    result = Number.isInteger(result) ? result : parseFloat(result.toFixed(10));
    currentValue = String(result);
  }

  firstValue = result;
  operator = null;
  justCalculated = true;
  updateScreen();
}

updateScreen();
