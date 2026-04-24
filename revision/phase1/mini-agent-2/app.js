import "dotenv/config"; // loads .env variables
import readline from "readline"
import { initMemory } from "./src/core/memory.js"
import { systemPrompt } from "./src/core/systemPrompt.js"
import { chat } from "./src/core/chat.js"

initMemory(systemPrompt) // stars convo with personality

// create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
    rl.question("You: ", async (input) => {
        const reply = await chat(input);
        console.log('AI: ', reply);
        ask();
    })
}

ask();
