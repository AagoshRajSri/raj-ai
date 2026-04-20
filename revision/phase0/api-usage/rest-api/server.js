import express from "express"
const app = express();
import userRouter from './user.js';

app.use(express.json())
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("Welcome to the home page!")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})