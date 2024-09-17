function intrestCalc() {
  const principle = parseFloat(document.getElementById("principle").value);

  const intrestRate = parseFloat(document.getElementById("intrestRate").value);

  const time = parseFloat(document.getElementById("time").value);

  console.log("principle", principle);
  console.log("intrestRate", intrestRate);
  console.log("time", time);

  document.querySelector("#results").innerHTML +=
    "result: " + principle * (1 + intrestRate * time);
}
