require("dotenv").config();
const { program } = require("commander");
const prompt = require("prompt");

prompt.start();

program.option("-a, --numberOne <text>");
program.option("-b, --numberTwo <text>");
program.parse();

function calculator() {
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
}

let { numberOne, numberTwo } = program.opts();

if (Number.isNaN(+numberOne) === false && Number.isNaN(+numberTwo) === false) {
    calculator();
}
if (Number.isNaN(+numberOne) && Number.isNaN(+numberTwo)) {
    debug("Ni pa meter numeros das");
    process.exit();
}
if (Number.isNaN(+numberOne) || Number.isNaN(+numberTwo)) {
    if (numberOne === "") {
        const askAgain = async () => {
            await prompt.get("type the first Number: ");
            numberOne = askAgain();
        };
    } else {
        const askAgain = async () => {
            numberTwo = await prompt.get("type the second Number: ");
            Promise.resolve(numberTwo);
        };
    }
}
calculator();
