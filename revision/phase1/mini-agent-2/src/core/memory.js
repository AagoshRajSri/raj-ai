// memory for context.
let messages = []; // holds the conversation

//initializing memory
export function initMemory(systemPrompt) {
    messages = [
        { role: "system", content: systemPrompt }
        // first message is always system prompt to give soul to the agent
    ];
}

const MAX_MESSAGES = 10;

function trimMessage() {
    if (messages.length > MAX_MESSAGES) {
        // Keep system prompt (index 0) and the last N messages
        const systemPrompt = messages[0];
        const recentMessages = messages.slice(-(MAX_MESSAGES - 1));
        messages = [systemPrompt, ...recentMessages];
    }
}

// add ontop of the first message
export function addMessage(role, content) {
    messages.push({ role, content })
    trimMessage();
}

export function getMessages() {
    return messages; // what u send to openai
}

