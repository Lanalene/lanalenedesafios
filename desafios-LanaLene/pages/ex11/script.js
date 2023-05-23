let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual o nome do funcionario?')
    let sal = Number(prompt(`Qual o salario de ${nome}?`))
    let r = Number(prompt(`O salário de ${nome} será reajustado em quantos porcento?`))

    msg.innerHTML = `<h3>${nome} recebeu um aumento salarial! </h3> <br>\
    O salário atual é R$ ${sal} <br>\
    Com o aumento de ${r}%, o salário vai aumentar em R$ ${sal * (r / 100)} <br>\
    A partir do próximo mês, ${nome} receberá R$ ${sal * (1 + r / 100)}`
})