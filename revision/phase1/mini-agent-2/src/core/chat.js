// chat logic
import { addMessage, getMessages } from "./memory.js"
import model from "../config/gemini.js"

export async function chat(userInput) {
    addMessage("user", userInput) //gets message from the user

    const messages = getMessages();
    
    // Transform history for Gemini (excluding system prompt and current message)
    const history = messages
        .filter(msg => msg.role !== "system")
        .map(msg => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }]
        }));

    // The last message in history is the one we just added
    const currentMessage = history.pop().parts[0].text;
    
    const chatSession = model.startChat({ history });
    const result = await chatSession.sendMessage(currentMessage);
    const reply = result.response.text();

    addMessage("assistant", reply) // adds response to memory

    return reply;
}
