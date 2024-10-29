function startStory() {
  // Desicion 1
  const noiseAction =
    prompt(`It's morning and you're in the kitchen getting a glass of orange juice, but oh no, you just remembered that you just brushed your teeth and your mouth is all minty! What are you going to do?
\n (Enter the number of your choice)
\n 1. Drink the orange juice anyways.
\n 2. Pour the orange juice down the drain. What a waste :(`);

  //
  // Desicion 1 choice 1 result (Desicion 2)
  if (noiseAction === "1") {
    const choice1 =
      prompt(`You drink the orange juice and it tastes bitter. You suddenly start to feel weird as the area around you starts to...glitch? You fall but you don't land on the kitchen floor, there's nothing there. The edges of your vision start to blur and turn black. The last thing you see is the empty glass on the counter.
      \n You wake up and realize you're falling from the sky. There's a loud thud as you land. Surprisingly you're ok but you don't know where you are and this new place looks strange. There's a rustling sound coming from your left, what do you want to do?
        \n (Enter the number of your choice)
        \n 1. Get up and run
        \n 2. Stay 
        \n 3. Look for a weapon`);
    //

    // Desicion 2 choice 1 (Desicion 3)
    if (choice1 === "1") {
      const choice1 = prompt(`run
        \n (Enter the number of your choice)
        \n 1. beep boop
        \n 2. Leave`);
      //
      // Desicion 2 choice 2 (Desicion 4)
    } else if (choice1 === "2") {
      const choice2 = prompt(`stay
        \n (Enter the number of your choice)
        \n 1. beep boop
        \n 2. Leave`);
      //
      // Desicion 2 choice 3 (Desicion 5)
    } else {
      const choice2 = prompt(`weapon.
        \n (Enter the number of your choice)
        \n 1. beep boop
        \n 2. Leave`);
    }
    //

    // Desicion 1 choice 2 result
  } else {
    alert(
      "Your day has been ruined. You head back to bed to sleep another 10 hours."
    );
  }
}
