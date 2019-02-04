// importação dos arquivos de player, armas e armaduras.
const player = require('./Player')
const espadas = require('./Armas')
const Armaduras = require('./Armaduras')
// modulo do node para uma tarefa agendada. No caso a execução de uma função de 5 em 5 segundos.
const schedule = require("node-schedule")
const rnd = function(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
// troca de arma automática.
function comprarEspada(){
    if (player.dinheiro >= espadas.Espada_de_Ferro.preco && player.arma != espadas.Espada_de_Ferro && player.arma.indice < 1){
        player.dinheiro = player.dinheiro - espadas.Espada_de_Ferro.preco
        player.arma = espadas.Espada_de_Ferro
        player.atk = player.arma.atk
        console.log("Você mendigou e comprou uma espada de Ferro! Parabens")
    }else if (player.dinheiro >= espadas.Espada_de_Aco.preco && player.arma != espadas.Espada_de_Aco && player.arma.indice < 2){
        player.dinheiro = player.dinheiro - espadas.Espada_de_Aco.preco
        player.arma = espadas.Espada_de_Aco
        player.atk = player.arma.atk
        console.log("Você mendigou e comprou uma espada de Aço! Parabens")
    }else if (player.dinheiro >= espadas.Espada_de_Adamantium.preco && player.arma != espadas.Espada_de_Adamantium && player.arma.indice < 3){
        player.dinheiro = player.dinheiro - espadas.Espada_de_Adamantium.preco
        player.arma = espadas.Espada_de_Adamantium
        player.atk = player.arma.atk
        console.log("Você mendigou e comprou uma espada de Adamantium! Parabens")
    }else if (player.dinheiro >= espadas.Espada_de_Ferro_Meteorico.preco && player.arma != espadas.Espada_de_Ferro_Meteorico && player.arma.indice < 4){
        player.dinheiro = player.dinheiro - espadas.Espada_de_Ferro_Meteorico.preco
        player.arma = espadas.Espada_de_Ferro_Meteorico
        player.atk = player.arma.atk
        console.log("Você mendigou e comprou uma espada de Ferro Meteórico! Parabens")
    }else if (player.dinheiro >= espadas.Espada_Lendaria.preco && player.arma != espadas.Espada_Lendaria && player.arma.indice < 5){
        player.dinheiro = player.dinheiro - espadas.Espada_Lendaria.preco
        player.arma = espadas.Espada_Lendaria
        player.atk = player.arma.atk
        console.log("Você Derrotou o capitalismo e comprou uma espada LENDÁRIA! Parabens")
    }
}
// troca de armadura automática.
function comprarArmadura(){
    if (player.dinheiro >= Armaduras.Armadura_de_ferro.preco && player.armadura != Armaduras.Armadura_de_ferro && player.armadura.indice < 1){
        player.dinheiro = player.dinheiro - Armaduras.Armadura_de_ferro.preco
        player.armadura = Armaduras.Armadura_de_ferro
        player.def = player.armadura.def
        console.log("Você mendigou e comprou uma armadura de Ferro! Parabens")
    }else if (player.dinheiro >= Armaduras.Armadura_de_aco.preco && player.armadura != Armaduras.Armadura_de_aco && player.armadura.indice < 2){
        player.dinheiro = player.dinheiro - Armaduras.Armadura_de_aco.preco
        player.armadura = Armaduras.Armadura_de_aco
        player.def = player.armadura.def
        console.log("Você mendigou e comprou uma armadura de Aço! Parabens")
    }else if (player.dinheiro >= Armaduras.Armadura_de_Adamantium.preco && player.armadura != Armaduras.Armadura_de_Adamantium && player.armadura.indice < 3){
        player.dinheiro = player.dinheiro - Armaduras.Armadura_de_Adamantium.preco
        player.armadura = Armaduras.Armadura_de_Adamantium
        player.def = player.armadura.def
        console.log("Você mendigou e comprou uma armadura de Adamantium! Parabens")
    }else if (player.dinheiro >= Armaduras.Armadura_de_ferro_Meteorico.preco && player.armadura != Armaduras.Armadura_de_ferro_Meteorico && player.armadura.indice < 4){
        player.dinheiro = player.dinheiro - Armaduras.Armadura_de_ferro_Meteorico.preco
        player.armadura = Armaduras.Armadura_de_ferro_Meteorico
        player.def = player.armadura.def
        console.log("Você mendigou e comprou uma armadura de Ferro Meteórico! Parabens")
    }else if (player.dinheiro >= Armaduras.Armadura_lendaria.preco && player.armadura != Armaduras.Armadura_lendaria && player.armadura.indice < 5){
        player.dinheiro = player.dinheiro - Armaduras.Armadura_lendaria.preco
        player.armadura = Armaduras.Armadura_lendaria
        player.def = player.armadura.def
        console.log("Você Derrotou o capitalismo e comprou uma armadura LENDÁRIA! Parabens")
    }
}
// divide a defesa do jogador por 1000 para fazer um cálculo em cima disso.
function caucularDefesa(){
    return (player.def / 1000)
}
// modos de batalha 1,4,5,6,7,8 = Ataques das duas partes.
// modos de batalha 2,3 = cura de uma das partes, ataque da outra.
// forçar modo de batalha 2 se a vida do player for menor que 1000
// 300 de vida são recuperados no modo de batalha 2, senão o player morre muito rápido ;-;
function modosDeBatalha(){
    let posicao = rnd(1,8)
    if(posicao === 1){
        mob.vida = mob.vida - player.atk
        player.hp = player.hp - (mob.dano - (mob.dano * caucularDefesa()))
        console.log(`Os dois encaixam um ataque
        ${mob.nome}: ${mob.vida} || dano:${player.atk}
        ${player.nome}: ${player.hp} || dano:${(mob.dano - (mob.dano * caucularDefesa()))}
        `)
    }else if(posicao === 2 && player.hp < player.hpMax || player.hp < 1000){
        player.hp = player.hp + 300
        player.hp = player.hp - (mob.dano - (mob.dano * caucularDefesa()))

        console.log(`você recupera vida, e ${mob.nome} te ataca
        ${player.nome}: ${player.hp} || vida: +300 
        ${player.nome}: ${player.hp} || dano:${(mob.dano - (mob.dano * caucularDefesa()) )}
        `)
    }else if (posicao === 3){
        mob.vida = mob.vida + 150
        mob.vida = mob.vida - player.atk

        console.log( `${mob.nome} recupera vida, e você ataca
        ${mob.nome}: ${mob.vida} || vida: +150 
        ${mob.nome}: ${mob.vida} || dano:${player.atk}
        `)
    } else {
        mob.vida = mob.vida - player.atk
        player.hp = player.hp - (mob.dano - (mob.dano * caucularDefesa()))
        console.log(`Os dois encaixam um ataque
        ${mob.nome}: ${mob.vida} || dano:${player.atk}
        ${player.nome}: ${player.hp} || dano:${(mob.dano - (mob.dano * caucularDefesa()) )}
        `)
    }
}
// o primeiro mob sempre será uma aranha
const mob = {
    nome:'Aranha',
    vida: 1054,
    xp: 225,
    dinheiro: 70,
    dano: 60,
}
//apos aranha ser derrotada o proximo mob pode ser:
// aranha(50%),
// demonio(30%),
// general demonio(15%),
// kumoko(5%)*abaixo do level 20,
// rei demonio(5%)*Acima do level 20,
function RotacaoDeMob(){
    let rotacao = rnd(0,100)
    if (rotacao <= 50){
        mob.nome = "Aranha"
        mob.vida = 1054
        mob.xp = 225
        mob.dinheiro = 70
        mob.dano = 60
    }else if (rotacao > 50 <= 80 ){
        mob.nome = "Demonio"
        mob.vida = 2816
        mob.xp = 884
        mob.dinheiro = 300
        mob.dano = 150
    }else if (rotacao > 80 <= 95){
        mob.nome = "General Demônio"
        mob.vida = 4500
        mob.xp = 1980
        mob.dinheiro = 850
        mob.dano = 400
    }else if (rotacao > 95 && player.level > 20){
        mob.nome = "rei demonio"
        mob.vida = 9054
        mob.xp = 4090
        mob.dinheiro = 1500
        mob.dano = 500
    } else {
        mob.nome = "Kumoko"
        mob.vida = 3100
        mob.xp = 1560
        mob.dinheiro = 500
        mob.dano = 180
    }
}
// esse comando será executado a cada 5 segundos
const luta = schedule.scheduleJob(("*/5 * * * * *"),function (){
        console.clear(modosDeBatalha())
        if(player.hp > player.hpMax){
            player.hp = player.hpMax
        }
        if(mob.vida <= 0){
            posluta()
            RotacaoDeMob()
            console.log(`seu adversário é agora um/uma ${mob.nome}`)
        }
        // verifica a finalização do jogo ou morte do player
        if(player.level === 30 && player.arma === espadas.Espada_Lendaria){
            luta.cancel()
            console.log("Você se tornou a pessoa mais forte do mundo. Parabéns!")
        }else if(player.hp <= 0){
            luta.cancel()
            console.log("Você morreu, tente novamente!")
        }
})
// calcula o xp,dinheiro recebido, 
// verifica aumento de level
// troca armadura/arma caso tenha a quantia necessária de dinheiro
function posluta(){
    console.log()
    player.xp = player.xp + mob.xp
    player.dinheiro = player.dinheiro + mob.dinheiro
    comprarEspada()
    comprarArmadura()
    console.log(`   
Parabens, você matou o monstro e ganhou ${mob.xp} de Xp! 
Você possui ${player.xp} de experiência de um total de ${player.xpMax}`)
    console.log(`Você ganhou uma recompensa de ${mob.dinheiro}!`)
    console.log(`Dinheiro: ${player.dinheiro}`)
    while(player.xp >= player.xpMax){
        player.level = player.level + 1
        player.xpMax = Math.ceil(player.xpMax * 1.2)
        console.log(`
        Você agora é level ${player.level}
        `)
    }
}
