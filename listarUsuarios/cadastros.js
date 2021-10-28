const inputNode = document.querySelector('input')
const list = document.querySelector('#list')
const form = document.querySelector('form')

const removeNode = node => node.remove()

const clearForm = (form) => form.reset()

const addRemoveButtonToNode = node => {
    const button = document.createElement('button')
    button.textContent = 'remove'
    button.addEventListener('click', () => removeNode(node))
    node.append(button)
}

function addToList(e, inputNode, list, form){
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = inputNode.value
    addRemoveButtonToNode(li)
    list.append(li)
    clearForm(form)
}

form.addEventListener('submit', e => addToList(e, inputNode, list, form))