const addInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");

let vazifalar = [];
let mylist = [];

function vazifaQoshish() {
  const text = addInput.value.trim(); //input.value uni ichidagi matnni oladi va trim() bilan boshidagi va oxiridagi bo'sh joylarni olib tashlaydi
  if (text.length === 0) return;

  vazifalar.push(text);

  // li element yartadi
  const li = document.createElement("li");
  // input element yaratadi
  const checkbox = document.createElement("input");
  // input typeni checkbox qilib belgilaydi
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
    vazifalar = vazifalar.filter((vazifa) => vazifa !== text);
  };

  li.append(checkbox, span, delBtn);
  list.appendChild(li);
  mylist.push(li);
  addInput.value = "";
}

function vazifaQidirish() {
  const searchText = searchInput.value.trim().toLowerCase();
  console.log(mylist, searchText);
  list.innerHTML = "";
  const mylist2 = mylist.filter((li) =>
    li.textContent.toLowerCase().includes(searchText),
  );
  list.append(...mylist2);
}