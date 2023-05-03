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
  displayOnScreen.innerHTML = value;
  // console.log(value);
  if (value === "CE") {
    displayOnScreen.textContent = " ";
  } else if (value === "=") {
    calculation = [];
    displayOnScreen.textContent = eval(joinedCalculation);
  } else {
    calculation.push(value);
    joinedCalculation = calculation.join("");
    displayOnScreen.textContent = joinedCalculation;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn));
});

