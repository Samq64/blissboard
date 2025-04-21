import words from "../words.js";

const table = document.getElementById("table");
for (const [num, word] of Object.entries(words)) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = num;
  const td2 = document.createElement("td");
  td2.textContent = word;
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
}

// TODO: Performace
document.getElementById("search").addEventListener("input", (e) => {
  const filter = e.target.value.toLowerCase();
  table.querySelectorAll("tr").forEach((row) => {
    if (row.id === "header") return;
    const col1 = row.getElementsByTagName("td")[0].innerText;
    const col2 = row.getElementsByTagName("td")[1].innerText.toLowerCase();
    if (col1.includes(filter) || col2.includes(filter)) {
      row.classList.remove("hidden");
    } else {
      row.classList.add("hidden");
    }
  });
});

