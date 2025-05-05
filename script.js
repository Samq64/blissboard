if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}

import words from "./words.js";
const output = document.getElementById("output");

document.getElementById("numBox").addEventListener("input", (e) => {
  const number = e.target.value;
  const word = words[number];
  if (word) {
    output.textContent = word;
    const el = document.createElement("li");
    const span = document.createElement("span");
    el.textContent = word;
    span.textContent = number;
    el.appendChild(span);
    document.getElementById("list").append(el);
    const history = document.getElementById("history");
    history.scrollTop = list.scrollHeight;
    history.style.display = "block";
  } else if (number.length === 4) {
    output.textContent = "I couldn't find that word.";
  } else if (number.length > 4) {
    e.target.value = number.slice(4);
  }
});
