const express = require('express');
const {db} = require("../utils/db");
const {ClientRecord} = require("../recrods/client-record");


const clientRouter = express.Router();


clientRouter
    .get('/',(req,res) =>{
        res.render('client/list-all',{
            clients: db.getAll(),
        })
    })
    .get('/:id',(req,res) =>{
        const client = new ClientRecord(db.getOne(req.params.id))

        console.log(client)
        
        res.render('client/one',{
            client,
        })
    })

    .put('/:id', (req,res) =>{
        db.update(req.params.id, req.body)
        res.render('client/modified',{
            name: req.body.name,
            id: req.params.id,
        })
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
    .get('/form/edit/:id', (req,res) =>{
        res.render('client/forms/edit',{
            client: db.getOne(req.params.id),
        })
    })

module.exports = {
    clientRouter
}