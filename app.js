const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/course/cover", express.static(path.join(__dirname, 'public', 'course', 'cover')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname))
//Defult Route ^

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }

]

app.get("/", async (req, res) => {
    res.render("views/index.hbs", { users })
})
app.post("/", async (req, res) => {
    res.render("views/index.hbs")
})

// Manual Route^
app.use((req, res) => {
    res.status(404).json({ message: "page not found 404" })
})
module.exports = app;