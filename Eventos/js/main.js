const img = document.querySelector('img')

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)

//const img = document.querySelector('img')

//img.addEventListener('click', function() {
//    console.log('Clicou')
//})