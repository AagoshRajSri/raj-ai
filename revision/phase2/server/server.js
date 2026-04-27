const express = require("express");
const cors = require("cors");
const { getAIReply } = require("./ai");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("../client"));

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    const reply = await getAIReply(userMessage);

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});