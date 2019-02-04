//função factory para criação de armaduras
function CriarArmadura(nome = '',def = 0, preco = 0, indice) {
    this.preco
    this.def
    return{
        nome,
        def,
        preco,
        indice
    }
}
module.exports = {
Armadura_de_ferro: new CriarArmadura("Armadura de Ferro", 100, 100, 1),
Armadura_de_aco: new CriarArmadura("Armadura de Aço", 150, 400, 2) ,
Armadura_inicial: new CriarArmadura("Armadura inicial", 50, 0, 0) ,
Armadura_lendaria: new CriarArmadura("Armadura Lendária", 800, 4500, 5), 
Armadura_de_Adamantium: new CriarArmadura("Armadura de Adamantium", 250, 1000, 3),
Armadura_de_ferro_Meteorico: new CriarArmadura("Armadura de Ferro Meteórico", 500, 2500, 4),
}
