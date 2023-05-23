let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    n = Number(prompt('Digite um número em metros', 0))

    if (typeof n == 'number') {
        msg.innerHTML = `<h1> A distância de ${n} metros vai ser:</h1> <br>\
        ${n / 1000} Quilômetros <br>\
        ${n / 100} Hectômetros <br>\
        ${n / 10} Decâmetros <br>\
        ${n * 10} Decímetros <br>\
        ${n * 100} Centímetros <br>\
        ${n * 1000} Milímetros <br>`
    } else {
        window.alert('Não é um Número')
    }
    
})