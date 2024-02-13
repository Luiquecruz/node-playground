const Bloco = require("./main-class");
const Espada = require("./inherit-class");

module.exports = {
  runOopMethods: () => {
    const bloco_1 = new Bloco("Madeira", 2);
    bloco_1.criarBloco();

    const bloco_2 = new Bloco("Pedra", 4);
    bloco_2.minerar();

    const bloco_atribuido = new Bloco(); // instanciação de classe sem paramentro explicito
    bloco_atribuido.textura = "Diamante";
    bloco_atribuido.resistencia = 99;
    bloco_atribuido.construir();

    console.log("_________________________________");
    console.log(' ')

    const espada_1 = new Espada("Madeira", 2, 10);
    espada_1.criarEspada();

    const espada_2 = new Espada("Pedra", 4, 20);
    espada_2.construir(); // metodo reescrito com polimorfismo

    const espada_atribuida = new Espada("Diamante", 99, 99);
    espada_atribuida.criarEspada();
    espada_atribuida.atacar();

    console.log("_________________________________");
    console.log(' ')
  },
};
