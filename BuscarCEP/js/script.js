const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleClick)

function handleClick(event) {
    event.preventDefault()
    const cep = inputCep.value
    BuscarCep(cep)
    console.log(event)
}

function BuscarCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.text())
        .then(body => {
            resultadoCep.innerHTML = body
        })
}

//API Buscar valor BitCoin
function fetchBtc() {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(btcJason => {
            console.log(btcJason)
        })
}
fetchBtc()