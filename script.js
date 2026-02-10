const input = document.getElementById("task");
const list = document.getElementById("list");

function vazifaQoshish() {
  const text = input.value.trim();
  if (text.length === 0) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("p");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete";

  checkbox.onchange = () => {
    span.classList.toggle("done");
  };

  delBtn.onclick = () => {
    li.remove();
  };

  li.append(checkbox, span, delBtn);
  list.appendChild(li);

  input.value = "";
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") vazifaQoshish();
});