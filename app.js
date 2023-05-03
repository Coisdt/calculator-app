// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".btn");

// let calculation = [];
// let joinedCalculation;

// function calculate(btn) {
//   const value = btn.textContent;
//   console.log(value);
//   display.innerHTML = value;
//   if (value === "=") {
//     calculation = [];
//     display.textContent = eval(joinedCalculation);
//   } else if (value === "CE") {
//     display.textContent = "";
//   }
//   // back btn
//   else {
//     calculation.push(value);
//     joinedCalculation = calculation.join("");
//     display.textContent = joinedCalculation;
//   }
// }

// buttons.forEach((btn) => {
//   console.log(btn);
//   btn.addEventListener("click", () => calculate(btn));
// });

const buttons = document.querySelectorAll(".btn");
const displayOnScreen = document.querySelector(".display-on-screen");

let calculation = [];
let joinedCalculation;

function calculate(btn) {
  // console.log(btn);
  const value = btn.textContent;
  displayOnScreen.textContent = value;
  // console.log(value);
  if (value === "CE") {
    displayOnScreen.textContent = " ";
    calculation = [];
  } else if (value === "=") {
    displayOnScreen.textContent = eval(joinedCalculation);
  }
  //add back btn
  else if (value === "<") {
    calculation.pop(value);
    joinedCalculation = calculation.join("");
    displayOnScreen.textContent = joinedCalculation;
  } else {
    calculation.push(value);
    console.log(calculation);
    joinedCalculation = calculation.join("");
    displayOnScreen.textContent = joinedCalculation;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn));
});
