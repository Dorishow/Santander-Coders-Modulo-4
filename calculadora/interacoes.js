const input = document.querySelector('input')
const radios = document.querySelectorAll('#operacao')
const calculo = document.querySelector('#calculo')

function clearInput() {
    input.value = ''
}

function clearCalc() {
    calculo.textContent = ''
}

function ShowInCalc(value) {
    calculo.textContent += ` ${value} `
}

function endCalc() {
    calculo.textContent += ` | `
}

function entrar() {
    calculadora.enter(parseInt(input.value))
    ShowInCalc(input.value)
    clearInput()
}

function handleCheckbox(event) {
    calculadora.enter(event.target.value)
    ShowInCalc(event.target.value)
}

function uncheckRadios() {
    radios.forEach(input => input.checked = false)
}

function equal() {
    const resultado = calculadora.equals()
    if (resultado) {
        ShowInCalc(" = ")
        ShowInCalc(resultado)
        endCalc()
        uncheckRadios()
    }
}