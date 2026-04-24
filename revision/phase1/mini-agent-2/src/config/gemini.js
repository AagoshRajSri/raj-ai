import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import { systemPrompt } from "../core/systemPrompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt 
});

export default model;
