import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    const res = await axios.post("http://localhost:3000/chat", {
      message: input
    });

    const botMsg = { role: "bot", text: res.data.reply };
    setMessages(prev => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Mini AI Agent 🤖</h2>

      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;