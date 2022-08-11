const express = require('express');
const {db} = require("../utils/db");


const clientRouter = express.Router();


clientRouter
    .get('/',(req,res) =>{
        res.render('client/list-all',{
            clients: db.getAll(),
        })
    })
    .get('/:id',(req,res) =>{
        res.render('client/one',{
            client: db.getOne(req.params.id),
        })
    })

    .put('/:id', (req,res) =>{
        res.send('Zmodyfikuj!');
    })
    .put('/',(req,res)=>{
        res.send('Dodaj')
    })
    .delete('/:id',(req,res) =>{
        db.delete(req.params.id);
        res.render('client/delete')
    })
    .post('/', (req,res)=>{
        const id = db.create(req.body)
        res.render('client/added',{
            name: req.body.name,
            id,
        })
    })
    .get('/form/add', (req,res) =>{
        res.render('client/forms/add')
    })

module.exports = {
    clientRouter
}