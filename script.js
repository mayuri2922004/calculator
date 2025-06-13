// Append number or operator to display
function append(value) {
  document.getElementById('display').value += value;
}

// Clear entire display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Delete last character
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Evaluate expression
function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // prevent form submission
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
