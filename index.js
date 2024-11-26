class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou de forma desconhecida';
          break;
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Itallo', 25, 'mago');
  heroi1.atacar();
  
  const heroi2 = new Heroi('Felipão', 30, 'guerreiro');
  heroi2.atacar();

  const heroi3 = new Heroi('Adrian', 28, 'monge');
  heroi3.atacar();
  
  const heroi4 = new Heroi('Apollo', 25, 'ninja');
  heroi4.atacar();
  