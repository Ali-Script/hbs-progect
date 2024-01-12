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
    { id: 1, name: "John Doe", password: "123" },
    { id: 2, name: "Jane Smith", password: "456" }

]

app.get("/", async (req, res) => {
    res.render("views/index.hbs", { users })
})

app.post("/sub", async (req, res) => {


    const result = users.some(data => {

        if (data.password == req.body.password && data.name == req.body.username) {

            res.render("views/home.hbs", { data })
            return true;
        }
        return false;
    })

    if (!result) return res.render("views/404.hbs")


})

// Manual Route^
app.use((req, res) => {
    res.status(404).json({ message: "page not found 404" })
})
module.exports = app;