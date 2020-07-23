setInterval(() => {
    const hora = document.querySelector('.hour')
    const minutos = document.querySelector('.minutes')
    const segundos = document.querySelector('.second')

    const horaAtual = new Date()
    let temp = horaAtual.getSeconds()
    let tempM = horaAtual.getMinutes()

    hora.innerHTML = horaAtual.getHours()
    minutos.innerHTML = tempM < 10 ? '0' + horaAtual.getMinutes() : horaAtual.getMinutes()
    segundos.innerHTML = temp < 10 ? '0' + horaAtual.getSeconds() : horaAtual.getSeconds()
}, 1000);