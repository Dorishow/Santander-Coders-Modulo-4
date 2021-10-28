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
    calculo.innerHTML = ''
    const li = document.createElement('li')
    li.textContent = value
    calculo.append(li)
}

function showHistory() {
    calculo.innerHTML = ''
    const history = calculadora.list()
    for(calcs of history){
        const li = document.createElement('li')
        li.textContent = calcs
        calculo.append(li)
    }
}

function clearHistory(){
    calculo.innerHTML = ''
    calculadora.reset()
}

function entrar(e) {
    e.preventDefault()
    calculadora.enter(parseInt(input.value))
    const conta = calculadora.getCalc()
    ShowInCalc(`${conta.n1} ${conta.operator || ''} ${conta.n2 || ''}`)
    clearInput()
}

function handleRadioButtons(event) {
    calculadora.enter(event.target.value)
    const conta = calculadora.getCalc()
    ShowInCalc(`${conta.n1 || ''} ${conta.operator || ''} ${conta.n2 || ''}`)
}

function uncheckRadios() {
    radios.forEach(input => input.checked = false)
}

function equal() {
    const resultado = calculadora.equals()
    if (resultado) {
        ShowInCalc(resultado)
        uncheckRadios()
    }
}