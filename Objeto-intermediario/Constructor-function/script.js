const Dom = {
    seletor: 'li',
    elemento() {
        console.log(this.seletor)
    }
}

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(this.nome + 'Andou')
    }
}

const joao = new Pessoa('João', 20)
const maria = new Pessoa('maria', 20)
const bruna = new Pessoa('bruna', 20)