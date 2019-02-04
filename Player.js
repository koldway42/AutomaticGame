// feito por motivo de teste, você pode acompanhar o status do player em tempo real em:
// http://localhost:4010/Player
const porta = 4010
const express = require('express')
const showStatus = express()
// importação dos modulos armas e armaduras
const espadas = require("./Armas")
const Armaduras = require("./Armaduras")
//Criação do objeto player
player = new Object
    player.nome = "Koldway42",
    player.arma = espadas.Espada_Inicial
    player.atk = player.arma.atk
    player.armadura = Armaduras.Armadura_inicial
    player.def = player.armadura.def
    player.hp = 3500
    player.hpMax = 3500
    player.dinheiro = 0
    player.level = 0
    player.xp = 0
    player.xpMax = 1000

console.log(player)
//envia o objeto player para /Player por método get(Não está em formato JSON)
showStatus.get('/Player', function(req, res, next){
    res.send(player)
})
//abertura da porta 4010
showStatus.listen(porta)
//exportaçao do objeto player
module.exports = player