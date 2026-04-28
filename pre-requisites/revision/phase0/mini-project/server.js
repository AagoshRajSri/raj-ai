import express from "express";
const app = express()
import 'dotenv/config'
const PORT = process.env.PORT || 3000
import aboutRouter from "./routes/about.js"
import contactRouter from "./routes/contact.js"
import { getAPI } from "./api.js"


app.use(express.json())
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)
app.get('/dogs', async (req, res) => {
    try {
        const data = await getAPI();
        res.send(data)
    } catch (error) {
        res.status(500).send('Error Fetching dogs')
    }
})
app.listen(PORT, () => {
    console.log(`Server bhag raha hai iss ${PORT} pe`)
})  