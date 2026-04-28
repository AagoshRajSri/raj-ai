import express, { Router } from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to my Contact Page')
    console.log('User visited the contact page')
})

export default router;

