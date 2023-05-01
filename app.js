const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");

function calculate(btn){
    const value = btn.textContent;
    console.log(value);

}
buttons.forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn));
});

