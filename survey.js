const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal of the day is your favourite? ", (meal) => {
        rl.question("What is your favourite thing to eat for that meal? ", (food) => {
          rl.question("What is your favourite sport? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, eating ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              rl.close();
            })
          })
        })
      })
    });
  });
});
