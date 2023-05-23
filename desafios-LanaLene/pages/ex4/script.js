let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Olá, Qual seu nome?', 'Violetta')
    let idade = prompt(`Olá ${nome}, Qual sua idade?`, '19')
    window.alert(`Prazer em te conhecer ${nome} de ${idade} anos`)
})