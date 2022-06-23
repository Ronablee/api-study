const express = require("express");
const routes = express.Router();


//Importação do model

const Model = require('./src/Model/ProductModel')

routes.get('/', (req, res) =>{
    res.send("Hello customer!")
});

//GET
routes.get('/items', async  (req, res) =>{
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
});

routes.get('/items/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//POST
routes.post('/items', async  (req, res) => {
    const data = new Model ({
        tittle: req.body.tittle,
        description: req.body.description,
        date: req.body.date
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//DELETE

routes.delete('/items/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.tittle} has been deleted`);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = routes;