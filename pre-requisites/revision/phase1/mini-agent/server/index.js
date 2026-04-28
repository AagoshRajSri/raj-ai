const express = require("express");
const cors = require("cors");
const { runAgent } = require("./agent");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    const { message } = req.body;

    const reply = await runAgent(message);

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});