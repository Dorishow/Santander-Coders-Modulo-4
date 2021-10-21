const inputNode = document.querySelector('input')

const addButton = document.querySelector('#add');

const list = document.querySelector('#list')

let listOfUsers = []

let dummyId = 0;

const clearList = () => list.innerHTML = '';

const clearInput = () => inputNode.value = '';

const addToList = (value, id) => [...listOfUsers, { name: value, id: id }]

function updateList(lista) {
    lista.forEach(
        user => {
            const itemList = document.createElement('li');
            const removeButton = document.createElement('button')
            removeButton.appendChild(document.createTextNode('remove'))
            removeButton.setAttribute('id', user.id)
            removeButton.setAttribute('class', 'remove')

            itemList.appendChild(document.createTextNode(user.name));

            itemList.appendChild(removeButton)
            list.appendChild(itemList)
        }
    )
}

function removeUser(id) {

    const newList = [...listOfUsers].filter(item => item.id !== +id)

    listOfUsers = newList
    
    updateScreen(event)

}

function updateScreen(e) {
    e.preventDefault()

    if (inputNode.value && e) {
        listOfUsers = addToList(inputNode.value, dummyId)
        dummyId = dummyId + 1
    }

    clearList()

    updateList(listOfUsers)

    clearInput()

    const allButtons = document.querySelectorAll('.remove')

    allButtons.forEach(
        currentButton => currentButton.addEventListener('click', (e) => removeUser(e.target.id))
    )

}

addButton.addEventListener('click', (e) => updateScreen(e))


