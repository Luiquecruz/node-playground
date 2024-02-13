const Bloco = require("./main-class");

/*** herança ***/
module.exports = class Espada extends Bloco {
  // atributos
  constructor(textura, resistencia, dano) {
    super(textura, resistencia);
    this.dano = dano;
  }
  // metodos
  criarEspada() {
    console.log(
      `Criando... Espada de ${this.textura} com resistência ${this.resistencia} obtida!`
    );
    console.log(" ");
  }
  atacar() {
    let probabilidade_acerto = Math.random() < 0.5;
    if (probabilidade_acerto)
      console.log(`Sucesso! Causou ${this.dano} de dano.`);
    if (!probabilidade_acerto) console.log(`Falha! Errou o ataque.`);
    console.log(" ");
  }
  /*** polimorfismo ***/
  construir() {
    let probabilidade_refinamento = Math.random() < 0.4;
    if (probabilidade_refinamento)
      console.log(
        `Refinamento bem sucedido! novo dano é ${
          this.dano + 0.2 * this.dano
        }. nova resistência é ${this.resistencia + 0.2 * this.resistencia}`
      );
    if (!probabilidade_refinamento)
      console.log(
        `Refinamento falhou! resistência reduzida para ${
          this.resistencia - 0.5 * this.resistencia
        }`
      );
    console.log(" ");
  }
};
