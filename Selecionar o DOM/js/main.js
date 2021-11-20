//const imagemAnimais = document.querySelectorAll('img[src ^= "img/imagem"]')
//console.log(imagemAnimais)

//const imgs = document.querySelectorAll('img')

//imgs.forEach(function(item, index, array) {
//    console.log(item, index)
//})

//const menu = document.querySelector('.menu')

//menu.classList.add('ativo')

//const img = document.querySelector('img')
//console.log(img.getAttribute('alt'))

//const imgAll = document.querySelectorAll('img')

//imgAll.forEach(imagem => {
//    console.log(imagem.offsetWidth)
//})

//PEGA CADA IMAGEM
//const imgs = document.querySelectorAll('img')

//function handlerImg(event) {
//    console.log(event.target)
//}

//imgs.forEach(img => {
//    img.addEventListener('click', handlerImg)
//})

/*

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
    event.preventDefault()
    console.log(event.target)
    event.currentTarget.classList.add('Ativo')
}

linksInternos.forEach(link => {
    link.addEventListener('click', handleLink)
})

*/

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)