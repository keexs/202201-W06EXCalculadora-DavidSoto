require("dotenv").config();
const { program } = require("commander");
const prompt = require("prompt");

prompt.start();

program.option("-a, --numberOne <text>");
program.option("-b, --numberTwo <text>");
program.parse();

const { numberOne, numberTwo } = program.opts();

if (Number.isNaN(+numberOne) === false && Number.isNaN(+numberTwo) === false) {
    console.log(
        numberOne,
        "+",
        numberTwo,
        "=",
        parseInt(numberOne) + parseInt(numberTwo)
    );
    console.log(numberOne, "-", numberTwo, "=", numberOne - numberTwo);
    console.log(numberOne, "*", numberTwo, "=", numberOne * numberTwo);
    console.log(numberOne, "/", numberTwo, "=", numberOne / numberTwo);
} else {
    debug("No los has metido bien");
}
