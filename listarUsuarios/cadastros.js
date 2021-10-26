const inputNode = document.querySelector('input')
const list = document.querySelector('#list')
const form = document.querySelector('form')

const remover = item => item.remove()

const clearForm = () => form.reset()

function addToList(e){
    e.preventDefault()
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.textContent = inputNode.value
    button.textContent = 'remover'
    button.addEventListener('click', () => remover(li))
    li.append(button)
    list.append(li)
    clearForm()
}

form.addEventListener('submit', e => addToList(e))