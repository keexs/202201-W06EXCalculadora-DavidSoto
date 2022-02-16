require("dotenv").config();
const { program } = require("commander");
const prompt = require("prompt");

prompt.start();

program.option("-a, --numberOne <number>");
program.option("-b, --numberTwo <number>");

const { numberOne, numberTwo } = program.opts();

if (numberOne == 6 && numberTwo == 3) {
    console.log(typeof numberOne);
    console.log(numberOne + numberTwo);
} else {
    debug("No los has metido bien");
}
