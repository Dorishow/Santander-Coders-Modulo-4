const inputText = document.querySelector('input')

const addButton = document.querySelector('#add');

const list = document.querySelector('#list')

let users = []

let idGenerator = 0;

const clearList = () => list.innerHTML = '';

const clearInput = () => inputText.value = '';

const addToList = (value, id) => [...users, { name: value, id: id }]

function updateList(lista){
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

function removeUser(id){

    const newList = [...users].filter(item => item.id !== +id )
    console.log(newList)

    users = newList

    updateScreen(event)

}

function updateScreen(e) {
    e.preventDefault()

    if (inputText.value) {
        users = addToList(inputText.value, idGenerator)
        idGenerator = idGenerator + 1
    }

    clearList()

    updateList(users)

    clearInput()

    const allButtons = document.querySelectorAll('.remove')
    
    allButtons.forEach(
        currentButton => currentButton.addEventListener('click', (e) => removeUser(e.target.id))
    )

}

addButton.addEventListener('click', (e) => updateScreen(e))


