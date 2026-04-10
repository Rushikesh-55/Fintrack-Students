let total = 0;

function addExpense() {
  let desc = document.getElementById("desc").value;
  let amount = Number(document.getElementById("amount").value);

  if (!desc || !amount) return;

  total += amount;
  document.getElementById("total").innerText = total;

  let li = document.createElement("li");
  li.innerText = desc + " - ₹" + amount;

  document.getElementById("list").appendChild(li);
}
