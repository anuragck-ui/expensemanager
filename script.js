var bal = 0;
var inc = 0;
var exp = 0;

window.onload = function () {
  document.getElementById("submitbt").addEventListener("click", balance);
  document.getElementById("submitbt").addEventListener("click", tras);
  document.listind.style.background = "black";
};
function balance() {
  let amount = parseInt(document.querySelector("#aminp").value);
  let select = document.getElementById("ty");
  let sval = select.options[select.selectedIndex].value;
  if (sval == "expense") {
    exp = exp + amount;
  } else if (sval == "income") {
    inc = inc + amount;
  }
  bal = inc - exp;
  document.getElementById("balam").innerText = bal;
  document.getElementById("incam").innerText = inc;
  document.getElementById("expam").innerText = exp;
}
function tras() {
    let amount = parseInt(document.querySelector("#aminp").value);
    let des = document.querySelector("#inp").value;
    let listitem='<div class="listind"><div class="historynm">'+des+'</div><div class="historyamount">'+amount+'</div></div>';
    document.getElementById("historylist").innerHTML +=listitem;
}

/*
  let cdiv1 = document.getElementById("historynm");
  let cdiv2 = document.getElementById("historyamount");
  let amount = parseInt(document.querySelector("#aminp").value);
  let des = document.querySelector("#inp").value;
  let nxdiv1 = document.createElement("div");
  nxdiv.textContent = des;
  nxdiv1.textContent = amount;
  cdiv1.appendChild(nxdiv);
  cdiv2.appendChild(nxdiv1);

  */