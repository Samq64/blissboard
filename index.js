async function main() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const list = document.getElementById("list");
    const words = await fetch("words.json").then(res => res.json());

    input.addEventListener("input", () => {
        const number = input.value;
        const word = words[number];
        if (word) {
            output.textContent = `Word: ${word}`;
            const el = document.createElement("li");
            el.textContent = word;
            list.appendChild(el);
        } else if (number.length === 4) {
            output.textContent = "No word found";
        } else if (number.length > 4) {
            input.value = number.slice(4);
        }
    });
}

main();
