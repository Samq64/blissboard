async function main() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const words = await fetch("words.json").then(res => res.json());

    input.addEventListener("input", () => {
        document.getElementById("output").textContent = words[input.value];
    });
}

main();
