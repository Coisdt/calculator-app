const buttons = document.querySelectorAll(".btn");
const displayMainScreen = document.querySelector(".current-display");
const displayPrevScreen = document.querySelector(".previous-display");

let calculation = [];
let joinedCalculation;
let answer;

function calculate(btn) {
  let value = btn.id;
  displayMainScreen.textContent = value;
  try {
    // ---------Clear All
    if (value === "CE") {
      displayMainScreen.textContent = " ";
      displayPrevScreen.textContent = " ";
      calculation = [];
    }
    // ---------sum of calculation
    else if (value === "=") {
      let answer = eval(joinedCalculation);
      displayMainScreen.textContent = answer;
      calculation = [answer];
      displayPrevScreen.textContent = joinedCalculation;
    }
    // ----------backspace
    else if (value === "<") {
      calculation.pop(value);
      joinedCalculation = calculation.join("");
      displayMainScreen.textContent = joinedCalculation;
    }
    // ----------double period error
    // but it prevent another decimal nr !!!!!!!!!!!!!!!! darn!
    // else if (calculation.includes(".")) {
    // joinedCalculation = calculation.join("");
    // displayMainScreen.textContent = joinedCalculation;
    // return
    //   console.log('yes');
    // }
    // ----------calculate percentage
    else if (value === "%") {
      calculation.push(value);
      joinedCalculation = calculation.join("");
      displayMainScreen.textContent = joinedCalculation;
    }
    // ----------add up all numbers/btns pressed
    else {
      calculation.push(value);
      joinedCalculation = calculation.join("");
      displayMainScreen.textContent = joinedCalculation;
    }
  } catch (error) {
    displayMainScreen.textContent = "Error";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn));
});
