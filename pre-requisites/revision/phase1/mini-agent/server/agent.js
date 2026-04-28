const axios = require("axios");
const tools = require("./tools");

async function callLLM(prompt) {
    const res = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3",
        prompt,
        stream: false
    });

    return res.data.response;
}

function tryParseJSON(text) {
    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

async function runAgent(userInput) {
    let context = `
You are an AI agent.

TOOLS:
- getTime()
- add({a, b})

RULES:
- If using a tool, return ONLY JSON:
  {"tool": "...", "args": {...}}
- Otherwise return normal text.
`;

    context += `\nUser: ${userInput}\n`;

    for (let i = 0; i < 5; i++) {
        const output = await callLLM(context);

        const parsed = tryParseJSON(output);

        if (parsed && parsed.tool && tools[parsed.tool]) {
            const result = tools[parsed.tool](parsed.args || {});

            context += `
Tool used: ${parsed.tool}
Tool result: ${result}
`;
        } else {
            return output;
        }
    }

    return "Agent stopped (too many steps)";
}

module.exports = { runAgent };