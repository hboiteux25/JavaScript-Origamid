const sobre = fetch('./sobre.html')

sobre
    .then(r => r.text())
    .then(body => {
        console.log(body)
    })