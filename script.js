async function main() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const list = document.getElementById("list");
  const words = await fetch("words.json").then((res) => res.json());

  input.addEventListener("input", () => {
    const number = input.value;
    const word = words[number];
    if (word) {
      output.textContent = word;
      const el = document.createElement("li");
      const span = document.createElement("span");
      el.textContent = word;
      span.style.float = "right";
      span.textContent = number;
      el.appendChild(span);
      list.insertBefore(el, list.children[0]);
    } else if (number.length === 4) {
      output.textContent = "No word found";
    } else if (number.length > 4) {
      input.value = number.slice(4);
    }
  });
}

main();
