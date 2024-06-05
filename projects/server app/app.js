const filter = document.querySelector('#filter')
const list = document.querySelector('#list')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filtered = USERS.filter((user) => 
     user.name.toLowerCase().includes(value)
    )
    render(filtered)
})

async function start(){
    list.innerHTML = "Loading..."
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() =>{
            USERS = data
            render(data)
        }, 1000)
    }
    catch(err){
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users = []){
    if(users.length === 0){
        list.innerHTML = 'No matched found'
    }
    else{
        const html = users.map(toHTML).join('')
        list.innerHTML = html
    }
    
}

function toHTML (user){
    return `
    <li class="list">${user.name}</li>
    `
}

start()