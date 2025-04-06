function jogarJokenpo() {
    //Um alerta feito para que você possa escrever, interagindo com o site
    let idade = prompt("Digite sua idade, por favor");
  
    // Teste lógico para identificar a idade
    if (idade >= 18) {
      alert("Você pode jogar!");
  
      let escolha = prompt("Escolha entre Pedra(1), Papel(2) ou tesoura(3)!");
  
      let escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
      // Jogador Pedra, Computador Pedra --> empate
      //Jogador Tesoura, Computador Tesoura --> empate
      //Jogador Papel, Computador Papel --> empate
  
      if (escolha == escolhaComputador) {
        alert("Empate!!");
      }
  
      // Jogador Pedra, Computador Tesoura --> Jogador Vence
      // Jogador Pedra, computador Papel --> Computador Vence
      if (escolha == 1) {
        if (escolhaComputador == 2) {
          alert("Jogador Perdeu!");
        }
        if (escolhaComputador == 3) {
          alert("Jogador Venceu!");
        }
      }
  
      // Jogador Papel, Computador Pedra --> Jogador Vence
      // Jogador Papel, Computador Tesoura --> Computador Vence
      if (escolha == 2) {
        if (escolhaComputador == 1) {
          alert("Jogador Vence!");
        }
        if (escolhaComputador == 3) {
          alert("Computador Vence!");
        }
      }
  
      // Jogador Tesoura, Computador Pedra --> Computador Vence
      // Jogador Tesoura, Computador Papel --> Jogador Vence
      if (escolha == 3) {
        if (escolhaComputador == 1) {
          alert("Computador Vence!");
        }
        if (escolhaComputador == 2) {
          alert("Jogador Vence!");
        }
      }
  
      alert("O computador escolheu " + escolhaComputador);
    } else {
      alert("Você não pode jogar!");
    }
  }
  