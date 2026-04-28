const btn = document.getElementById("startBtn");
const status = document.getElementById("status");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-US";
recognition.interimResults = false;

const container = document.getElementById("appContainer");

btn.onclick = () => {
    recognition.start();
    status.innerText = "SYSTEM: LISTENING...";
    container.classList.add("listening");
};

recognition.onresult = async (event) => {
    container.classList.remove("listening");
    const transcript = event.results[0][0].transcript;
    status.innerText = "INPUT_LOG: " + transcript;

    // send to backend
    const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: transcript })
    });

    const data = await res.json();

    speak(data.reply);
};

recognition.onerror = () => {
    container.classList.remove("listening");
    status.innerText = "SYSTEM_ERROR: RETRY REQUIRED";
};

recognition.onend = () => {
    container.classList.remove("listening");
};

// 🎧 TTS
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);

    // 🧠 challenge features
    speech.rate = Math.random() < 0.3 ? 0.9 : 1; // slight variation
    speech.pitch = 1;

    // ⏱️ slight pause
    setTimeout(() => {
        window.speechSynthesis.speak(speech);
    }, 400);
}