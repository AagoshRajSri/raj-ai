import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Landed on /user page")
    res.json({ message: "returning list of all users" })
})

router.post('/', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: "User Created", user: newUser })
})

router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: `User with ID ${userId} updated`, updatedUser })
})

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with id ${userId} deleted` })
})

export default router