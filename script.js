/************************ Initialize Variables *****************************/
const switchInput = document.getElementById("switch");
const calculator = document.getElementById("calculator");
const buttons = document.getElementsByClassName("bt");
const controls = document.getElementById("controls");
const equal = document.getElementById("equal");
const output = document.getElementById("output");
const formula = document.getElementById("formula");
const numberButtons = document.getElementById("number-buttons");
const operators = document.getElementById("operators");
const operatorButtons = document.getElementsByClassName("operatorButtons");
const ac = document.getElementById('ac');
const equals = document.getElementById('equals');

/************************ Dark Mode Implementation *****************************/
switchInput.addEventListener("change", () => { //dark mode
  if (switchInput.checked) {
    calculator.style.background =
      "linear-gradient(120deg, #202020, #111111)";
    output.style.color = "white";
    equal.style.color = "white";
    controls.style.background =
      "linear-gradient(90deg, rgba(0,24,43,1), rgba(0,74,93,1))";

    for (let button of buttons) {
      button.style.backgroundColor = "#00000030";
      button.style.color = "white";
    }
  } else {
    calculator.style.background = "";
    output.style.color = "";
    equal.style.color = "";
    controls.style.background = "";

    for (let button of buttons) {
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  }
});
/************************ Calculator Functionality *****************************/
numberButtons.addEventListener('click', function(event) { //display numbers
  if (event.target.classList.contains('bt')) {
    if (output.textContent.length < 17) {
      output.textContent += event.target.textContent;
      formula.textContent += event.target.textContent;
    }
  }
});

for (let button of operatorButtons) {
  button.addEventListener('click', function(event) {
    const operator = event.target.textContent;
      formula.textContent += operator;
    output.textContent = '';
  });
}


ac.addEventListener('click', function(event){
  output.textContent = '';
  formula.textContent = '';
});

equals.addEventListener('click', function(){
  try{
    let expression = formula.textContent.replace(/x/g, '*').replace(/÷/g, '/');
    
    result = eval(expression);
    output.textContent = result;
  }
  catch (error){
    formula.textContent = "Error";
  }
});