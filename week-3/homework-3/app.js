function intrestCalc() {
  const principle = parseFloat(document.getElementById("principle").value);

  const intrestRate = parseFloat(document.getElementById("intrestRate").value);

  const time = parseFloat(document.getElementById("time").value);

  console.log("principle", principle);
  console.log("intrestRate", intrestRate);
  console.log("time", time);
  const total = principle * (1 + intrestRate * time);
  const totalIntrest = principle * (intrestRate / 100) * time;
  document.querySelector(
    "#results"
  ).innerHTML += `With a begining principle of $${principle} and with a growth rate of ${intrestRate}% for ${time} years, your total intrest will be $${totalIntrest} with a grand total of $${total}. <br/>`;
}
