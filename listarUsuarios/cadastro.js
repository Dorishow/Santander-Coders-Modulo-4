const addButton = document.querySelector('#add');

const list = document.querySelector('#list')

const inputText = document.querySelector('input')

let users = []

const clear = () => {
    list.innerHTML = '';
}

function add(e) {
    if(inputText.value) users = [...users, {name: inputText.value}]
    clear()
    users.forEach(
        user => {
            const itemList = document.createElement('li');
            const removeButton = document.createElement('button')

            removeButton.appendChild(document.createTextNode('remove'))
            itemList.appendChild(document.createTextNode(user.name));

            itemList.appendChild(removeButton)
            list.appendChild(itemList)
        }
    )
    inputText.value = ''
}

addButton.addEventListener('click', (e) => add(e))