//Ticket math
let ticketCost = 14;
let ticketNum = 3;
document.getElementById("ticketNum").innerHTML += ticketNum;

document.getElementById("ticketCost").innerHTML += ticketCost;

document.getElementById("ttCost").innerHTML += ticketNum * ticketCost;

// Shopping math
let bank = 235.87;
let jacket = 70;
let shirt = 35;
let pants = 75;
let shoes = 60;

bank = bank - shirt - pants - shoes;
document.getElementById("addJacket").innerHTML += bank >= jacket;

// Pizza math
let slices = 8;
document.getElementById("students").innerHTML += (pizza * slices) / 2.5;

document.getElementById("profPizza").innerHTML += (pizza * 8) % 2.5;

// Monty's meal math
let adult = 12;
let child = 6;
let drinks = 1.5;

document.getElementById("Monty").innerHTML += adult * 2 + child + drinks * 3;

// Math of tips earned
const week1 = 202.45;
const week2 = 134.97;
const week3 = 256.63;
const week4 = 178.22;

document.getElementById("tips").innerHTML +=
  (week1 + week2 + week3 + week4) / 4;
