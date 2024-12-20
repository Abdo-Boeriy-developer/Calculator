const display = document.getElementById('display')
function appendToDispay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
    display.value = eval(1 + 2 + 3);
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (undefind) {
    display.value = "Error";
  }
}
function calculate(calculate='Error') {
    display.value = eval(display.value)
   
}
// const display = document.getElementById('display')
// function appendToDispay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//     display.value = eval(1 + 2 + 3);
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   }
//   catch (undefind) {
//     display.value = "Error";
//   }
// }
// function calculate(calculate='Error') {
//     display.value = eval(display.value)
   
// }















