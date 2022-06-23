//Global variables
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = 3333;
app.use(express.json())


const routes = require('../routes')


//MongoDB connection
const mongoose = require('mongoose');

const url = process.env.DATABASE_ACESS

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });

//Server status
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.use(routes)