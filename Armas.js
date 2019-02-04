//função factory para criação de armas
function CriarEspada(nome = '',atk = 0,preco = 0, indice) {
    this.preco
    this.atk
    return{
        nome,
        atk,
        preco,
        indice
    }
}
module.exports = {
Espada_de_Ferro: new CriarEspada("Espada de Ferro", 100, 100, 1),
Espada_de_Aco: new CriarEspada("Espada de Aço", 150, 400, 2),
Espada_Inicial: new CriarEspada("Espada Inicial", 50, 0, 0),
Espada_Lendaria: new CriarEspada("Espada Lendária", 1000, 4500, 5),
Espada_de_Adamantium: new CriarEspada("Espada de Adamantium", 250, 1000, 3),
Espada_de_Ferro_Meteorico: new CriarEspada("Espada de Ferro Meteórico", 500, 2500, 4),
}