let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;
console.log(CompArray);

function RPS(numb) {
  // console.log(numb);
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision;
  // if (numb == 3) {
  //   innerscore -= 0.5;
  // }

  if (numb == 0) {
    if (CompDecision == "Paper") {
      innerscore--;
    } else if (CompDecision == "Scissors") {
      innerscore++;
    }
  }

  if (numb == 1) {
    if (CompDecision == "Rock") {
      innerscore += 1;
    } else if (CompDecision == "Scissors") {
      innerscore--;
    }
  }

  if (numb == 2) {
    if (CompDecision == "Rock") {
      innerscore--;
    } else if (CompDecision == "Paper") {
      innerscore++;
    }
  }
  // console.log(innerscore);
  document.getElementById("Score").innerHTML = `Score: ${innerscore}`;
}
