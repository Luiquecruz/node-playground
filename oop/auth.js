class Cliente {
  // atributos
  constructor(login, senha) {
    this.login = login;
    /*** encapsulamento ***/
    let _senha = senha; // "_" no início da declaração, indica que a variável é privada

    this.getSenha = () => _senha;
    this.setSenha = (novaSenha) => (_senha = novaSenha);
  }
  // metodos
  entrar() {
    console.log(`Usuário: ${this.login}`);
    console.log(`Senha: ${this.getSenha()}`);

    if (this.login === "admin" && this.getSenha() === 123456) {
      console.log("Cliente autenticado!");
    } else {
      console.log("Usuário e/ou senha inválido(s)");
    }

    console.log(" ");
  }
}

module.exports = {
  login: () => {
    const user_1 = new Cliente("admin", 123456);
    user_1.entrar();

    const user_2 = new Cliente("admin", 654321);
    user_2.entrar();
    user_2.setSenha(123456);
    user_2.entrar();
  },
};
