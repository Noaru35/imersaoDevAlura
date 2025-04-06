function jogar() {
    // Preciso criar uma lista com 3 jogadores
    let personagens = ["", "", ""];
  
    let viloes = ["", "", ""];
  
    let forcaPersonagem = 0;
    let forcaViloes = 0;
  
    alert("o Array personagens contem: " + personagens);
  
    for (let i = 0; i < 3; i++) {
      ePersonagem = prompt("Digite o nome do seu personagem?" + (i + 1));
      personagens[i] = ePersonagem;
      //Calcular a força de cada jogador, e depois somar para saber a força do meu time
      forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }
    console.log("agora o array contém: " + personagens);
  
    console.log("Inicio vilões " + viloes);
    for (let i = 0; i < 3; i++) {
      indiceAleatorio = Math.floor(Math.random() * 5);
  
      let viloesPossiveis = [
        "Nazare Tedesco",
        "Odete Roitmann",
        "Flora",
        "Carminha",
        "Laura Prudente da Costa"
      ];
  
      viloes[i] = viloesPossiveis[indiceAleatorio];
      //Calcular a força de cada jogador do time do computador
      forcaViloes += Math.floor(Math.random() * 10) + 1;
    }
    console.log("Vilões: " + viloes);
  
    //Comparar os dois times para saber quem venceu
  
    if (forcaPersonagem > forcaViloes) {
      alert(
        "Seu time venceu a disputa do cabo de guerra. Sua força foi: " +
          forcaPersonagem +
          " A força dos vilões foi: " +
          forcaViloes
      );
    } else {
      if (forcaPersonagem < forcaViloes) {
        alert(
          "Seu time perdeu a disputa de cabo de guerra. A sua força foi: " +
            forcaPersonagem +
            " A força dos vilões foi: " +
            forcaViloes
        );
      } else {
        alert(
          "Vocês empataram! a força do seu time foi: " +
            forcaPersonagem +
            ". A força dos vilões foi: " +
            forcaViloes
        );
      }
    }
  }
  