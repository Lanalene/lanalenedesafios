let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    n = prompt('Qual produto você quer adquirir??')
    p = Number(prompt(`Qual o valor de ${n}?`))

    msg.innerHTML = `<h3>Calculando desconto para ${n}</h3> <br>\
    O preço original é R$ ${p} <br>\
    Você obteve R$ ${p * 0.1} de desconto <br>\
    com isso, você pagará R$ ${p * 0.9}`

})