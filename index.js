#!/usr/bin/env node
import inquirer from "inquirer";
const RNG = Math.floor(Math.random() * 10);
async function main() {
    const result = await inquirer.prompt([
        {
            type: 'number',
            name: 'user',
            message: 'Guess the number between 1 and 10:'
        }
    ]);
    const { user } = result;
    if (user === RNG) {
        console.log(`User guessed number is ${user}.`);
        console.log(`The system has chosen the number ${RNG}.`);
        console.log('You have picked the right number.');
    }
    else {
        console.log(`The system has chosen the number ${RNG}.`);
        console.log('Sorry, please try again.');
    }
}
main();
