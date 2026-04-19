#!/usr/bin/env node

import chalk from "chalk";
import { input, select } from '@inquirer/prompts';
import gradient from "gradient-string"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import { createSpinner } from "nanospinner";

let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who Wants To Be A Javascript Millionaire? \n'
    );
    await sleep();
    rainbowTitle.stop()

    console.log(`${chalk.bgBlue('How to play')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    `)
}

async function askName() {
    playerName = await input({
        message: 'What is your name?',
        default: 'Player'
    })
}

async function question1() {
    const answer = await select({
        message: 'Javascript was created in 10 days then released on \n',
        choices: [
            { name: 'June 1st, 1995', value: 'June 1st, 1995' },
            { name: 'May 10th, 1995', value: 'May 10th, 1995' },
            { name: 'Dec 4th, 1995', value: 'Dec 4th, 1995' },
            { name: 'August 25th, 1995', value: 'August 25th, 1995' },
        ],
    })

    return handleAnswer(answer === 'Dec 4th, 1995')
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start()
    await sleep()
    
    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a correct answer!` })
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lost ${playerName}!` })
        process.exit(1)
    }
}

function winner() {
    console.clear()
    const msg = `Congrats , ${playerName} ! \n $ 1 , 0 0 0 , 0 0 0`
    
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}

// Top-level await logic
await welcome();
await askName();
await question1();
winner();
