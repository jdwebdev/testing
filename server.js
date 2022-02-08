const express = require("express");
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use(express.static('client/build'));

app.get('/api/youtube', (_, res) => { // on a transformé le 1er param req en _ pour montrer qu'on ne l'utilise pas et que c'est voulu (pas un oubli)
    res.send({
        msg: "Bonjour les gens là !!!!"
    })
});

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
});