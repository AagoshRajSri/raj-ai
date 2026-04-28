import express, { Router } from "express";
const app = express.Router();

app.get('/', (req, res) => {
    res.send('Welcome to my About Page')
    console.log('User visited the about page')
})

export default app;

