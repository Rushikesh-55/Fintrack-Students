let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let total = 0;

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  total = 0;

  expenses.forEach(e => {
    total += e.amount;

    let li = document.createElement("li");
    li.innerText = `${e.desc} - ₹${e.amount} (${e.category})`;

    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function addExpense() {
  let desc = document.getElementById("desc").value;
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value;

  if (!desc || !amount) return;

  expenses.push({ desc, amount, category });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  render();
}

render();
