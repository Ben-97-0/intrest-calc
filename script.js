console.log("hi");
//Formula A = P*(1+r/n)**(nt)
// p = inp1
// r= inp2
// t = inp3
//Variables
//inputs
dropbox = document.getElementById("box1");
let amo = document.getElementById("amount");
let year = document.getElementById("year");
let long = document.getElementById("long");
let comp = document.getElementById("compound");
let out = document.getElementById("output");
let imgout = document.getElementById("imgtage");
let body = document.getElementById("body");

//buttons
let but = document.getElementById("calc");
// Calculator button
but.addEventListener("click", clickedcalc);

function clickedcalc() {
  //Inputs
  let inp1 = +amo.value;
  let inp2 = +year.value;
  let inpr = inp2 / 100;
  let inp3 = +long.value;
  let inp4 = +comp.value;
  let answer = inp1 * (1 + inpr / inp4) ** (inp4 * inp3);
  answer = answer.toFixed(2);
  // Process and outputs
  if (inp3 < 0) {
    out.innerHTML = "You cannot have invested for negative years!";
    out.style.background = "   rgba(24, 218, 105, 0.9)";
    out.style.padding = "10px 10px";
    out.style.borderRadius = "20px";
    document.getElementById("earn").innerHTML = "You Earned";
  } else if (answer < 0) {
    out.innerHTML = "You cannot have gained negative money!";
    out.style.background = "   rgba(24, 218, 105, 0.9)";
    out.style.padding = "10px 10px";
    out.style.borderRadius = "20px";
    document.getElementById("earn").innerHTML = "You Earned";
  } else if (answer == 0) {
    out.innerHTML = "You somehow made 0$";
    out.style.background = "   rgba(24, 218, 105, 0.9)";
    out.style.padding = "10px 10px";
    out.style.borderRadius = "20px";
    document.getElementById("earn").innerHTML = "You Earned";
  } else {
    answer = answer + "$";

    out.innerHTML = answer;
    document.getElementById("earn").innerHTML = "You Earned";
    out.style.background = "   rgba(24, 218, 105, 0.9)";
    out.style.padding = "10px 10px";
    out.style.borderRadius = "20px";
  }
}
document.getElementById("rand").addEventListener("click", clickedrand);
function clickedrand() {
  let inp1 = Math.random() * 10000;
  inp1 = inp1.toFixed(2);
  document.getElementById("amount").value = inp1;

  let inp2 = Math.random() * 100;
  inp2 = Math.round(inp2);
  document.getElementById("year").value = inp2;

  let inpr = inp2 / 100;
  let inp3 = Math.random() * 100;
  inp3 = Math.round(inp3);
  document.getElementById("long").value = inp3;

  let inp4 = Math.random() * 365;
  inp4 = Math.round(inp4);
  document.getElementById("compound").value = inp4;

  let answer = inp1 * (1 + inpr / inp4) ** (inp4 * inp3);
}
//Clear button
document.getElementById("clear").addEventListener("click", clickedclear);

function clickedclear() {
  document.getElementById("amount").value = "";
  document.getElementById("year").value = "";
  document.getElementById("long").value = "";
  document.getElementById("compound").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("earn").innerHTML = "How much you earned";
  out.style.background = "rgba(255, 255, 255, 0)";
}
// Light mode and dark mode calculator
document.getElementById("dark").addEventListener("click", clickeddark);

function clickeddark() {
  body.style.background = "rgb(20,20,20)";
  body.style.color = "white";
  body.style.opacity = "0.9";
  document.getElementById("link").style.color = "red";
}
document.getElementById("light").addEventListener("click", clickedlight);

function clickedlight() {
  document.getElementById("link").style.color = "darkblue";

  body.style.background = "white";
  body.style.opacity = "0.9";
  body.style.color = "black";
}
