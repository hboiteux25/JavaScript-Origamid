const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
controles.addEventListener('change', handleChange)

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    width(value) {
        this.element.style.width = value + 'px'
    },
    texto(value) {
        this.element.innerText = value
    },
    color(value) {
        this.element.style.color = value
    },
    border(value) {
        this.element.style.border = value + 'px'
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    },
    fontFamiliy(value) {
        this.element.style.fontFamiliy = value
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem'
    }
}

function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

function setValues() {
    const propiedades = Object.keys(localStorage)
    propiedades.forEach(propiedades => {
        handleStyle[propertie](localStorage[properties])
        controles.elements[properties].value = localStorage[properties]
    })
    console.log(propiedades)
    showCss()
}

function saveValues(name, value) {
    localStorage[name] = value
}
setValues()

function showCss() {
    cssText.innerHTML = btn.style.cssText.split('; ').join(';</span><span>')
    console.log(btn.style.cssText.split('; ').join(';</span><span>'))
}