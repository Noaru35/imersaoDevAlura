function jogar() {
    let quebrado = false;
  
    for (let rodada = 1; rodada <= 3; rodada++) {
      console.log("Rodada: " + rodada);
  
      let escolhaJogador = prompt("Nivel " + rodada + ", escolha o vidro (1, 2 ou 3)?");
      let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

      if (escolhaJogador < 1 || escolhaJogador > 3){
        alert('Input inválido! Trapaceiros são punidos! O vidro quebrou');
        quebrado = true;
      } 
      
      if (escolhaJogador == pisoQuebrado) {
        alert("O vidro quebrou, fim de jogo");
        quebrado = true;
      } else {
        alert("O vidro não quebrou! piso quebrado era o: " + pisoQuebrado);
      }
  
    }
    if (quebrado == false) {
        alert("Você venceu! Vamos jogar novamente");
        rodada = 0;
      }

  }
  