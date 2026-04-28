async function getAIReply(message) {
    // simulate thinking delay
    await new Promise(r => setTimeout(r, 500));

    // 🧠 keep responses short sometimes
    const shortReplies = [
        "Got it.",
        "Hmm okay.",
        "Interesting.",
        "Tell me more."
    ];

    if (Math.random() < 0.3) {
        return shortReplies[Math.floor(Math.random() * shortReplies.length)];
    }

    return `You said: ${message}`;
}

module.exports = { getAIReply };    