const express = require("express");
const app = express();
const port = 3333;

app.get('/', (req, res) =>{
    res.send('Hello World')
});

app.get('/items', (req, res) =>{
    res.send('Welcome to items list!')
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});
