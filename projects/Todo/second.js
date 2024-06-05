const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

createBtn.onclick = function() {

    if(inputElement.value.length === 0){
        return
    }
    const newNote= {
        title: inputElement.value,
        completed:false
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}


const notes = [
    {
        title: 'ты сам этого хотел',
        completed: true,
    },
    {
        title: 'choices have consequences',
        completed: false,
    }
]

function render(){
    listElement.innerHTML = ''
    if(notes.length === 0){
        listElement.innerHTML = '<p>Нет элементов<p/>'
    }
    for (let i=0; i<notes.length; i++){
        listElement.insertAdjacentHTML(`beforeend`, getNoteTemplate(notes[i], i))
    }
    
}
render()

listElement.onclick = function(event){
    if (event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }

        render()
    }
}

function getNoteTemplate(note, index) {
    return `
        <li>
            <span class="${note.completed ? 'completed' : ''}">${note.title}</span>
            <span class="todo_btn">
                <span class="done_btn ${note.completed ? 'warning' : 'succes'}"
                data-index="${index}" data-type="toggle">&check;</span>
                <span class="delete_btn" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
    `
}
