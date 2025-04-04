import words from "./words.js";

const output = document.getElementById("output");
const input = document.getElementById("input");
input.value = "";

input.addEventListener("input", () => {
  const number = input.value;
  const word = words[number];
  if (word) {
    output.textContent = word;
    const el = document.createElement("li");
    const span = document.createElement("span");
    el.textContent = word;
    span.textContent = number;
    el.appendChild(span);
    document.getElementById("list").prepend(el);
    document.getElementById("history").style.display = "block";
  } else if (number.length === 4) {
    output.textContent = "No word found";
  } else if (number.length > 4) {
    input.value = number.slice(4);
  }
});
