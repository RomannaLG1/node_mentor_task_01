const chalk = require("chalk");
const redline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const limit = 5;
let counter = 1;

const randomNumber = Math.round(Math.random() * 10);

console.log(chalk.green.bgCyan.bold("Wellcome to the our game"));

const game = () => {
  if (counter <= limit) {
    redline.question(chalk.blue.bgGreenBright.bold("Enter number\n"), (num) => {
      const number = +num;
      if (number === randomNumber) {
        console.log(chalk.green.bgCyanBright.bold(`You win! Number ${number}`));
        redline.close();
      }
      if (number > randomNumber) {
        console.log(chalk.yellow.bold("Your number is bigger then number"));
        counter += 1;
        game();
      }
      if (number < randomNumber) {
        console.log(chalk.yellow.bold("Your number is less then number"));
        counter += 1;
        game();
      }
    });
  } else {
    console.log(chalk.red.bold("Count more 5. Game over:("));
    redline.close();
  }
};

game();
