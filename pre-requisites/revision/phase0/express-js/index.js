// const express = require('express');
// const app = express();

// // app.get('/', (req, res) => {
// //     res.send("Welcome to Express JS!")
// // })

// // app.get('/about', (req, res) => {
// //     res.send("Welcome to the ABOUT PAGE")
// // })

// // app.get('/contact', (req, res) => {
// //     res.send("Welcome to the CONTACT PAGE")
// // })

// // app.get('/api/users', (req, res) => {
// //     const users = [
// //         { id: 1, name: "Aagosh" },
// //         { id: 2, name: "Aarav" },
// //         { id: 3, name: "Ajay" },
// //     ];
// //     const list = users.map((user, index) => `${index + 1}. ${user.name}`).join('\n');
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.send(list);
// // })

// // app.post('/submit', (req, res) => {
// //     res.send('Form Submitted')
// // })

// // app.listen(3000, () => {
// //     console.log("Server is running on port 3000")
// // })


// const userRoute = require('./user.js')
// app.use('/users', userRoute)

// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })

//middleware

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Request URL:", req.url);
    console.log("Middleware hai ye")
    next();
})

app.get('/', (req, res) => {
    res.send("Welcome to Express JS!")
    console.log("Route handler hai ye")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
