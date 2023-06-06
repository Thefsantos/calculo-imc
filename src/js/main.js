// VARIÁVEIS
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// callback
form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
}