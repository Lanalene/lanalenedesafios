let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual produto que você está comprando?')
    let n1 = Number(prompt(`Qual o valor de ${nome}`))
    let n2 = Number(prompt(`Qual valor você entregou para o caixa? ${nome}`))

    let troco = n2 - n1

    window.alert(`Você comprou ${nome} que custou R$ ${n1} \nDeu R$ ${n2} e irá receber R$ ${troco} de troco \nAo seu dispor `)
})