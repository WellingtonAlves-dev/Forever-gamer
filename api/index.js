const express = require('express');
const consign = require("consign");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Configurando o cors
app.use(cors());

//Configurando o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Diretorio publico
app.use('/imagens', express.static('uploads'));

//incluindo todos os arquivos do route
consign().include("routes/").into(app);

//Deixando o servido na esculta
app.listen(3800, err => {
    if (err) console.log(err);
    console.log("Service work http://localhost:3000/");
})