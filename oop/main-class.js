/*** abstração ***/
module.exports = class Bloco {
  // atributos
  constructor(textura, resistencia) {
    this.textura = textura;
    this.resistencia = resistencia;
  }
  // metodos
  criarBloco() {
    this.textura;
    this.resistencia;
    console.log(`Bloco de ${this.textura} surgiu no mapa.`);
    console.log(" ");
  }
  construir() {
    this.textura;
    console.log(
      `Construindo... Bloco de ${this.textura} com resistência ${this.resistencia} recebido.`
    );
    console.log(" ");
  }
  minerar() {
    console.log(`Minerando... Recursos de ${this.textura} minerados!`);
    console.log(" ");
  }
};
