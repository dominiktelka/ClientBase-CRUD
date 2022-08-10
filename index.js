const express = require('express');
const hbs = require('express-handlebars');
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db')

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static("public"))
app.use(express.json())
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    //helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter)
app.use('/client', clientRouter)
app.get('/test',(req,res)=>{
    db.update("6a2c644a-32cc-449a-b1b0-29075ece2fc2",{
        "name":"Tester",
        "maile":"abc@pl.com",
    })
    res.send('ok')
})

app.listen(3000, 'localhost', ()=>{
    console.log('Listening on http://localhost:3000')
})