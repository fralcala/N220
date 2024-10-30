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
    const choice =
      prompt(`You drink the orange juice and it tastes bitter. You suddenly start to feel weird as the area around you starts to...glitch? You fall but you don't land on the kitchen floor, there's nothing there. The edges of your vision start to blur and turn black. The last thing you see is the empty glass on the counter.
      \n You wake up and realize you're falling from the sky. There's a loud thud as you land. Surprisingly you're ok but you don't know where you are and this new place looks strange. There's a rustling sound coming from your left, what do you want to do?
        \n (Enter the number of your choice)
        \n 1. Get up and run
        \n 2. Don't do anything 
        \n 3. Look for a weapon`);
    //

    // Desicion 2 choice 1 (Desicion 3)
    if (choice === "1") {
      const choice =
        prompt(`You get up as the rustling sound seems to get closer. You see an empty field and a forest full of trees, which do you choose?
        \n 1. Forest
        \n 2. Field`);
      //

      // Desicion 3 choice 1 (end2)
      if (choice === "1") {
        alert(
          `You immediately run into a tree...you didn't really think that through, did you?`
        );

        //

        // Desicion 3 choice 2 (end3)
      } else {
        alert(
          `You try and head for the field but immediately collapse. You really should have rested for a couple more seconds.`
        );
      }
      //

      // Desicion 2 choice 2 (Desicion 4)
    } else if (choice === "2") {
      const choice =
        prompt(`You decide to not do anything, which is probably a good choice since You're feeling a little dizzy. A large stick comes down on to the bush to your right. It's another person? They say they saw you fall from the sky and ask if you're okay. How do you respond?
        \n (Enter the number of your choice)
        \n 1. Tell them what happened and ask them if the know how to help.
        \n 2. Don't answer.`);
      //
      // Desicion 2 choice 3 (Desicion 5)
    } else {
      const choice =
        prompt(`You quickly look around and see three items. Which will you grab?
        \n (Enter the number of your choice)
        \n 1. A round rock
        \n 2. A large stick
        \n 3. Shiny thing covered in dirt`);
      //

      // Desicion 5 choice 1 ()
      if (choice === "1") {
        const choice = prompt(
          `You quickly try and grab the rock. After struggling to grab it you toss it in the direction of the rustling but as you do a person pops out from behind some large bushes. Turns out your aim sucks...or maybe it's the fact that you're feeling a little dizzy and nauseaous from the fall. "Did you just try and hit me?!?". How do you respond?`
        );
        //

        //
      } else if (choice === "1") {
        const choice = prompt(
          `You quickly try and grab the rock. After struggling to grab it you toss it in the direction of the rustling but as you do a person pops out from behind some large bushes. Turns out your aim sucks...or maybe it's the fact that you're feeling a little dizzy and nauseaous from the fall. "Did you just try and hit me?!?". How do you respond?`
        );
      } else {
      }
    }
    //

    // Desicion 1 choice 2 result (end1)
  } else {
    alert(
      "Your day has been ruined. You head back to bed to sleep another 10 hours."
    );
  }
}
