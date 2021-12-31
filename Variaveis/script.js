var nome = 'Henrique'
var idade = '25'
var comida
console.log(comida)
comida = 'Lasanha'
console.log(comida)

var pais, professor, time, endereco, rua

function nomeUpCase(nome) {
    return nome.toUpperCase()
}

console.log(nomeUpCase('henrique'))

fetch('viacep.com.br/ws/01001000/json/')
    .then(response => response.text())
    .then(text => {
        console.log(text)
    })