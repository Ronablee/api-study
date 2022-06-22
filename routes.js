const express = require("express");
const routes = express.Router();


routes.get('/', (req, res) =>{
    res.send("Hello customer!")
})

routes.get('/items', (req, res) =>{
    res.send("Welcome to item shop!")
})

module.exports = routes;