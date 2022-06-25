const list = [

]

const addButton = document.getElementById('button')
const input = document.getElementById('input')

function change(id){
    const item = list.findIndex(t => t.id === id)
    const text = prompt('Введите текс для изменения')
    list[item].text = text;
    render()
}

function deleted(id){
    const item = list.findIndex(d => d.id === id)
    list.splice(item, 1)
    render(list[item])
}

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')

    for (let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');

        const changeButton = document.createElement('button')
        changeButton.setAttribute('class', 'change')
        changeButton.onclick = () => {
            change(list[i].id)
        }
        changeButton.innerText = 'Change'

        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class','delete')
        deleteButton.innerText = 'Delete'
        deleteButton.addEventListener('click', () =>
            deleted(list[i].id)
        )

        buttons.append(changeButton,deleteButton)
        div.append(buttons)
        mainDiv.append(div)
    }

    const form = document.querySelector('.form')
    document.querySelector('.list').remove()
    form.append(mainDiv)
}

addButton.addEventListener('click', function (){
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    console.log(list)
    render()
})