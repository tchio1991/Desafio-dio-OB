// Classe Heroi representando um herói de uma aventura
class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de ataque conforme o tipo
    atacar() {
        let ataque = "";

        // Condições para definir o tipo de ataque conforme o tipo do herói
        if (this.tipo.toLowerCase() === "mago") {
            ataque = "magia";
        } else if (this.tipo.toLowerCase() === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo.toLowerCase() === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo.toLowerCase() === "ninja") {
            ataque = "shuriken";
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando objetos do tipo Heroi
const mago = new Heroi("Merlin", 40, "mago");
const guerreiro = new Heroi("Arthur", 35, "guerreiro");
const monge = new Heroi("Shaolin", 50, "monge");
const ninja = new Heroi("Ryu", 28, "ninja");

// Chamando o método atacar de cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
