function tocarSom(tecla) {
    const button = document.querySelector(`#${tecla}`)
    button ? button.play() : console.log('Elemento não encontrado, ou não existe')
}

function removeClass(element) {
    element.classList.remove('ativa')
}

function init() {
    const listaTeclas = document.querySelectorAll('.tecla')
    for (let i = 0; i < listaTeclas.length; i++) {
        const som = listaTeclas[i].classList[1]
        listaTeclas[i].addEventListener('click', () => {
            tocarSom(`som_${som}`)
            removeClass(listaTeclas[i])
        })

        listaTeclas[i].addEventListener('keydown', (event) => {
            if (event.isComposing || event.keyCode === 13 || event.keyCode === 32) {
                listaTeclas[i].classList.add('ativa')
            }
        })

        listaTeclas[i].addEventListener('keyup', () => {
            listaTeclas[i].classList.remove('ativa')
        })

    }
}

init()