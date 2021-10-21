const inputText = document.querySelector('input')

const addButton = document.querySelector('#add');

const list = document.querySelector('#list')

let users = []

const clearList = () => list.innerHTML = '';

let idGenerator = 0;

const iterateUsersList = (value, id) => [...users, { name: value, id: id }]

function addUser(e) {
    e.preventDefault()

    if (inputText.value) {
        users = iterateUsersList(inputText.value,idGenerator)
        idGenerator = idGenerator + 1
    }

    clearList()

    users.forEach(
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

    inputText.value = ''

    const allButtons = document.querySelectorAll('.remove')
    
    allButtons.forEach(
        currentButton => currentButton.addEventListener('click', function alertar(){
            alert(currentButton.id)
        })
    )

}

addButton.addEventListener('click', (e) => addUser(e))


