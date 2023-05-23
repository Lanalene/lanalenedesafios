let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Nome do aluno')
    let n1 = Number(prompt(`Primeira nota de ${nome}`))
    let n2 = Number(prompt(`segunda nota de ${nome}`))
    let média = (n1 + n2) / 2

    msg.innerHTML = `<h1>Analisando a situação de ${nome}</h1> <br>\
    Com notas ${n1} e ${n2}, a média é ${média} <br>`

    if (média < 3) {
        msg.innerHTML += "com média abaixo de 3.0, o aluno está REPROVADO"
    } else if (média >= 3 && média < 6) {
        msg.innerHTML += "com média entre 3.0 e 6.0, o aluno está de RECUPERAÇÃO"
    } else if (média >= 6) {
        msg.innerHTML += "com média acima de 6.0, o aluno está APROVADO"
    }

})