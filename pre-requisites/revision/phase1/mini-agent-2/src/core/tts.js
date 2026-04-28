import axios from "axios"
import fs from "fs"
import player from "play-sound"
import say from "say"

const audio = player()
const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = 'hpp4J3VqNfWAUOO0d1Us'

let useFallback = false;

export async function speak(text) {
    try {
        const response = await axios({
            method: 'POST',
            url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            headers: {
                "xi-api-key": API_KEY,
                "Content-Type": "application/json"
            },
            data: {
                text: text,
                model_id: "eleven_multilingual_v2", // updated to a more standard model
            },
            responseType: "arraybuffer"
        })

        fs.writeFileSync("output.mp3", response.data);
        console.log("Audio generated successfully at ./output.mp3")
        useFallback = false;
    } catch (error) {
        console.error("ElevenLabs Error:", error.response?.data?.toString() || error.message);
        console.log("Falling back to system TTS...");
        useFallback = true;
        say.speak(text);
    }
}

export function play() {
    if (!useFallback) {
        audio.play("output.mp3", (err) => {
            if (err) console.error("Playback Error:", err);
        });
    }
}
