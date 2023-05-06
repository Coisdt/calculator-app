const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let calculation = [];
let joinedCalculation;

function calculate(btn) {
  const value = btn.textContent;
  console.log(value);
  display.innerHTML = value;
  if (value === "=") {
    calculation = [];
    display.textContent = eval(joinedCalculation);
  } else if (value === "CE") {
    display.textContent = "";
  }
  // back btn
  else {
    calculation.push(value);
    joinedCalculation = calculation.join("");
    display.textContent = joinedCalculation;
  }
}

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => calculate(btn));
});
