// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його
//  поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок
//  "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameLabelRef.textContent = "Anonymous";
  } else {
    nameLabelRef.textContent = event.currentTarget.value;
  }
}
