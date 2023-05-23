let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let d = Number(prompt('Quanto você possui?'))

    msg.innerHTML = `Você pode comprar com ${d / 5} dolares! <br> 1 dolar = 4,97 real brasileiro`

})