
const express = require('express')
const axios = require('axios')

const app = express()
app.listen('3000')//fica ouvindo o navegador

app.use(express.json())

app.route('/').get((req,res) => {

    axios.get('https://api.github.com/users/eduardobnhr')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})




//delete
/*app.route('/:identificador').delete ( (req,res) => {
    author = ""
    res.send (req.params.identificador)
} )
*/

//post
//middleware
//app.use(express.json())

//app.route('/').post( (req,res) => res.send(req.body) )

//GET
//app.route('/').get( (req,res)=> res.send("hello word") )
//app.route('/sobre').get( (req,res)=> res.send("aprendendo a navegar") )

/*
PUT = serve para editar informações
let author = "eduardo"

app.route('/').get((req,res)=> res.send(author))

app.use(express.json())
app.route('/').put ( (req,res) => {
    author = req.body.author
    res.send(author)
} )

{

}
*/