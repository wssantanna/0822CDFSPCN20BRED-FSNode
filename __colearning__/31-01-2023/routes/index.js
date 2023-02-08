const express = require('express');
const router = express.Router();

const titulo = "Hotwells"

const jogos = [
    {
        "id" : 1,
        "nome" : "hogwarts legacy",
        "preco": "R$214,50",
        "imagem" : "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e",
    }
]

const pokemons = [{
    "count":1279,
    "next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
    "previous":null,
    "results":[
        {
            "name":"bulbasaur",
            "url":"https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name":"ivysaur",
            "url":"https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name":"venusaur",
            "url":"https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name":"charmander",
            "url":"https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name":"charmeleon",
            "url":"https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name":"charizard",
            "url":"https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name":"squirtle",
            "url":"https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name":"wartortle",
            "url":"https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name":"blastoise",
            "url":"https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name":"caterpie",
            "url":"https://pokeapi.co/api/v2/pokemon/10/"
        }]
    }
];


router.get("/", function (req, res){
    res.render('index' , { titulo, jogos, pokemons});
});

module.exports =  router;